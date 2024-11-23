import dawdreamer as daw
from scipy.io import wavfile
import numpy as np
import librosa
import time
import json
import os

np.random.seed()

with open('chords.json') as f:
    CHORDS = json.load(f)

maj_root = {
    1: ["FirstInv", "SecondInv", "Maj7th", "Maj6th", "Add9ThirdInv"],
    4: ["FirstInv", "SecondInv", "Dom7th", "Dom7thThirdInv", "Maj7th", "Maj7thThirdInv", "Maj7th9th", "Add9", "Add9ThirdInv"],
    5: ["FirstInv", "SecondInv", "Maj6th", "Dom7th", "Dom7thThirdInv", "Maj7th", "Maj7thThirdInv", "Maj7th9th", "Add9", "Add9ThirdInv", "Dim"],
    6: ["Dim", "Min7th", "Min6th", "Add9", "Add9ThirdInv"]
}
min_root = {
    1: []

}

SAMPLE_RATE = 44100
BPM = 120
INSTRUMENT_PATH = "C:/Users/jminl/codeStuff/pythonMusic/Instruments/LABS.dll"
DRUMS_PATH = "C:/Users/jminl/codeStuff/pythonMusic/Instruments/LofiDrumKit/"
BD808_PATH = "C:/Users/jminl/codeStuff/pythonMusic/Instruments/BD-808.dll"

HATS_PATH = DRUMS_PATH + \
    "Cymbals/HiHats-Closed/Hihat (" + str(np.random.randint(1, 15)) + ").wav"
KICKS_PATH = DRUMS_PATH + \
    "Kicks/Kick (" + str(np.random.randint(1, 15)) + ").wav"
PERCS_PATH = DRUMS_PATH + \
    "Percussion/Percussion (" + str(np.random.randint(1, 7)) + ").wav"
SNARES_PATH = DRUMS_PATH + \
    "Snares/snare (" + str(np.random.randint(1, 6)) + ").wav"

AMBI_PATH = DRUMS_PATH + "Ambience/"


def load_audio_file(file_path, duration=None):
    sig, rate = librosa.load(
        file_path, duration=duration, mono=False, sr=SAMPLE_RATE)
    assert (rate == SAMPLE_RATE)
    return sig


engine = daw.RenderEngine(SAMPLE_RATE, 64)
engine.set_bpm(BPM)

chords_processor = engine.make_plugin_processor("chords", INSTRUMENT_PATH)
bd808 = engine.make_plugin_processor("bd808", BD808_PATH)
hats = engine.make_sampler_processor("hats", load_audio_file(HATS_PATH))
kicks = engine.make_sampler_processor("kicks", load_audio_file(KICKS_PATH))
percs = engine.make_sampler_processor("percs", load_audio_file(PERCS_PATH))
snares = engine.make_sampler_processor("snares", load_audio_file(SNARES_PATH))
add_drums_processor = engine.make_add_processor(
    "add_drums", [.4, .8, .8, .25])
add_chords_processor = engine.make_add_processor("add_chords", [.5, 1, .3])

ambience_processor = engine.make_playback_processor(
    "ambience", load_audio_file(AMBI_PATH + np.random.choice(os.listdir(AMBI_PATH))))

faust_effect = engine.make_faust_processor("faust")
faust_effect.set_dsp_string("process = sp.stereoize( fi.lowpass(2, 5000.) );")
faust_effect.record = True

time.sleep(1)

chords_processor.open_editor(),

print(add_chords_processor.set_options())


def getHats(num_m):
    beats = []
    for i in range(4*num_m*2):
        beats += [i/2 + np.random.randn()/75]
    return beats


def getKicks(num_m):
    return [2 * i + np.random.randn()/100 for i in range(4*num_m)]


def getSnares(num_m):
    return [2 * i + 1 + np.random.randn() / 100 for i in range(4*num_m)]


def getPercs(num_m):
    return []


def getDrumPattern():
    patterns = []
    patterns.append(getHats(4))
    patterns.append(getKicks(4))
    patterns.append(getPercs(4))
    patterns.append(getSnares(4))
    return patterns


def getChords():
    # general patter -> I-(anything)-(anything *optional)-(IV or V)-(*optional IV or V)- (I?)
    chords_pattern = [1, 5, 6, 4]
    chords = []
    for chord in chords_pattern:
        ch = np.random.choice(maj_root[chord])
        chords.append(CHORDS[ch])
        print(ch)
    return chords


def loadDrums():
    patterns = getDrumPattern()
    for beat in patterns[0]:
        hats.add_midi_note(0, 127, beat, 2, beats=True)
    for beat in patterns[1]:
        kicks.add_midi_note(0, 127, beat, 2, beats=True)
    for beat in patterns[2]:
        percs.add_midi_note(0, 127, beat, 2, beats=True)
    for beat in patterns[3]:
        snares.add_midi_note(0, 127, beat, 2, beats=True)


def loadChords():
    chords = getChords()
    b = 0
    for chord in chords:
        for note in chord:
            chords_processor.add_midi_note(54 + note, 127, b*4, 4, beats=True)
        b += 1


# chords_processor.add_midi_note(60, 127, 2, 4)
# hats.add_midi_note(0, 127, 1, 4, beats=True)


loadDrums()
loadChords()

print(HATS_PATH)

engine.load_graph([
    (chords_processor, []),
    (bd808, []),
    (hats, []),
    (kicks, []),
    (percs, []),
    (snares, []),
    (ambience_processor, []),
    (add_drums_processor, ["hats", "kicks", "snares", "percs"]),
    (faust_effect, ["chords"]),
    (add_chords_processor, ["add_drums", "faust", "ambience"])
])

engine.render(16, beats=True)  # render 4 seconds.
audio = engine.get_audio()
wavfile.write('synth_demo.wav', SAMPLE_RATE, audio.transpose())
# add midi again, render again, and so on...
