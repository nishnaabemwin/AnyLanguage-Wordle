import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'aa',
  'ii',
  'oo',
  'a',
  'i',
  'o',
  'e',
  'ch',
  'sh',
  'zh',
  'nh',
  'b',
  'd',
  'g',
  'i',
  'j',
  'k',
  'm',
  'n',
  'p',
  's',
  't',
  'w',
  'y',
  'z',
  // "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
