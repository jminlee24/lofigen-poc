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

SAMPLE_RATE = 24000
BPM = 80
INSTRUMENT_PATH = "C:/Users/jminl/codeStuff/pythonMusic/Instruments/LABS.dll"
DRUMS_PATH = "C:/Users/jminl/codeStuff/pythonMusic/Instruments/LofiDrumKit/"

AMBI_PATH = DRUMS_PATH + "Ambience/"


def load_audio_file(file_path, duration=None):
  sig, rate = librosa.load(
      file_path, duration=duration, mono=False, sr=SAMPLE_RATE)
  assert (rate == SAMPLE_RATE)
  return sig


engine = daw.RenderEngine(SAMPLE_RATE, 64)
engine.set_bpm(BPM)

chords_processor = engine.make_plugin_processor("chords", INSTRUMENT_PATH)
ambience_processor = engine.make_playback_processor(
    "ambience", load_audio_file(AMBI_PATH + np.random.choice(os.listdir(AMBI_PATH))))
add_chords_processor = engine.make_add_processor("add_chords", [1, .3])

faust_effect = engine.make_faust_processor("faust")
faust_effect.set_dsp_string("process = sp.stereoize( fi.lowpass(2, 6000.) );")
faust_effect.record = True

chords_processor.open_editor(),


def getChords():
  # general patter -> I-(anything)-(anything *optional)-(IV or V)-(*optional IV or V)- (I?)
  chords_pattern = [1, 5, 6, 4]
  chords = []
  for chord in chords_pattern:
    ch = np.random.choice(maj_root[chord])
    chords.append(CHORDS[ch])
    print(ch)
  return chords


def loadChords():
  chords = getChords()
  b = 0
  for chord in chords:
    for note in chord:
      chords_processor.add_midi_note(54 + note, 127, b * 4, 4, beats=True)
    b += 1


loadChords()

engine.load_graph([
    (chords_processor, []),
    (ambience_processor, []),
    (faust_effect, ["chords"]),
    (add_chords_processor, ["faust", "ambience"])
])

engine.render(16, beats=True)  # render 4 seconds.
audio = engine.get_audio()
wavfile.write('chords.wav', SAMPLE_RATE, audio.transpose())
