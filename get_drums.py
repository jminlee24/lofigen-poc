import dawdreamer as daw
from scipy.io import wavfile
import numpy as np
import librosa
import time
import json
import os

np.random.seed()


SAMPLE_RATE = 16000
BPM = 80
DRUMS_PATH = "C:/Users/jminl/codeStuff/pythonMusic/Instruments/LofiDrumKit/"
HATS_PATH = DRUMS_PATH + \
    "Cymbals/HiHats_Processed/Hihat (" + \
    str(np.random.randint(1, 15)) + ").wav"
KICKS_PATH = DRUMS_PATH + \
    "Kicks_Processed/Kick (" + str(np.random.randint(1, 15)) + ").wav"
PERCS_PATH = DRUMS_PATH + \
    "Percussion/Percussion (" + str(np.random.randint(1, 7)) + ").wav"
SNARES_PATH = DRUMS_PATH + \
    "Claps_Processed/snare (" + str(np.random.randint(1, 6)) + ").wav"
CYM_PATH = DRUMS_PATH + \
  "Cymbals/reverse_processed/Crash (" + str(np.random.randint(1, 11)) + ").wav"


def load_audio_file(file_path, duration=None):
  sig, rate = librosa.load(
      file_path, duration=duration, mono=False, sr=SAMPLE_RATE)
  assert (rate == SAMPLE_RATE)
  return sig


engine = daw.RenderEngine(SAMPLE_RATE, 64)
engine.set_bpm(BPM)

hats = engine.make_sampler_processor("hats", load_audio_file(HATS_PATH))
kicks = engine.make_sampler_processor("kicks", load_audio_file(KICKS_PATH))
percs = engine.make_sampler_processor("percs", load_audio_file(PERCS_PATH))
snares = engine.make_sampler_processor("snares", load_audio_file(SNARES_PATH))
cymbals = engine.make_sampler_processor("cymbals", load_audio_file(CYM_PATH))
add_drums_processor = engine.make_add_processor("add_drums", [.2, .6, .2, .3])


def getHats(num_m, beats_per_measure):
  d_n = ((np.random.rand() - .5) / 100)
  beats = []
  for i in range(beats_per_measure * num_m * 2):
    if i % (beats_per_measure * 2) == 7:
      if np.random.random() > .3:
        beats += [i / 2]
    else:
      beats += [i / 2 + np.abs(d_n)]

  return beats


def getKicks(num_m, beats_per_measure):
  beats = []
  for i in range(beats_per_measure * num_m // 2):
    beats += [2 * i]
    if i % 8 == 3 and np.random.random() > .5:
      beats += [i + .5]
    elif i % 8 == 1 and np.random.random() > .6:
      beats += [i + .25]
    elif i % 8 == 5 and np.random.random() > .5:
      beats += [i + .5]
    elif i % 8 == 7 and np.random.random() > .3:
      beats += [i + .25]
  return beats


def getSnares(num_m, beats_per_measure):
  beats = []
  for i in range(beats_per_measure * num_m // 2):
    beats += [2 * i + 1]
    if i % (beats_per_measure) == 3 and np.random.random() > .65:
      beats += [2 * i + 1 + 1 / 2]
  return beats


def getPercs(num_m, beats_per_measure):
  beats = []
  return beats


def getCymbals(num_m, beats_per_measure, tot_loops):
  beats = []

  return beats


def getDrumPattern(beats_per_m, num_m):
  beats_per_measure = 4
  if np.random.random() > .8:
    beats_per_measure = 3
  patterns = []
  patterns.append(getHats(num_m, beats_per_measure))
  patterns.append(getKicks(num_m, beats_per_measure))
  patterns.append(getPercs(num_m, beats_per_measure))
  patterns.append(getSnares(num_m, beats_per_measure))
  return patterns


def loadDrums(beats_per_m, num_m, num_loops):
  patterns = getDrumPattern(beats_per_m, num_m)
  loop_pat = [i for i in range(1, num_loops)]
  rand_el = np.random.choice(loop_pat[1:-1])
  loop_pat.remove(rand_el)
  for i in loop_pat:
    loudness = 1
    if i == loop_pat[-1]:
      loudness = .5
    for beat in patterns[0]:
      mult = 1
      if beat % 1 != 0:
        mult = .7
      hats.add_midi_note(0, int(120 * mult * loudness), i *
                         beats_per_m * num_m + beat, 2, beats=True)
    for beat in patterns[1]:
      kicks.add_midi_note(0, int(100 * loudness), i * beats_per_m *
                          num_m + beat, 2, beats=True)
    for beat in patterns[2]:
      percs.add_midi_note(0, int(100 * loudness), i * beats_per_m *
                          num_m + beat, 2, beats=True)
    for beat in patterns[3]:
      snares.add_midi_note(0, int(100 * loudness), i * beats_per_m *
                           num_m + beat, 2, beats=True)
  cymbals.add_midi_note(0, 100, beats_per_m * num_m - 2, 2, beats=True)
  cymbals.add_midi_note(0, 100, beats_per_m * num_m *
                        (rand_el + 1) - 2, 2, beats=True)


loadDrums(4, 4, 16)

engine.load_graph([
  (hats, []),
  (kicks, []),
  (percs, []),
  (snares, []),
  (cymbals, []),
  (add_drums_processor, ["hats", "kicks", "snares", "cymbals"]),
])

engine.render(4 * 4 * 16, beats=True)
audio = engine.get_audio()
wavfile.write('drums.wav', SAMPLE_RATE, audio.transpose())
