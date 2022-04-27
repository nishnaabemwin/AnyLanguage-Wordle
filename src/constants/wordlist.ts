import { CONFIG } from './config'

export const WORDS = [
  'baapish',
  'waasmo',
  'maaskaa',
  'zaambii',
  'noojmo',
  'siikzi',
  'gonda',
  'jiimaan',
  'wiinge',
  'biinat',
  'maamwi',
  'aazhgan',
  'aabdek',
  'naasaap',
  'magkii',
  'washme',
  'nshiwe',
  'giizis',
  'ezgaak',
  'jijaak',
  'zhichge',
  'ziiwzi',
  'giigoonh',
  'waasiinh',
  'gwaawe',
  'noogse',
  'shkwaach',
  'beskaa',
  'aandse',
  'nawach',
  'aandbi',
  'ninda',
  'jidmoo',
  'aadshin',
  'mooday',
  'zhngos',
  'negaw',
  'jiitat',
  'niibiish',
  'aasooke',
  'nishin',
  'piszi',
  'aawnsa',
  'giisaach',
  'gaawaanh',
  'maandaa',
  'dkaashi',
  'webtaa',
  'aandkii',
  'wiinat',
  'niiwin',
  'njigaa',
  'waabzii',
  'wenen',
  'wiinan',
  'bmena',
  'miijim',
  'wiidge',
  'daakaan',
  'gaachin',
  'pakne',
  'miikse',
  'zhiishiib',
  'wesiinh',
  'biidoon',
  'zhashki',
  'jiibay',
  'kojiish',
  'gaapzi',
  'pabin',
  'nagish',
  'mzhishi',
  'ziigzi',
  'zhoowbii',
  'aazhbik',
  'nanda',
  'daawen',
  'mdaabii',
  'dikon',
  'gaachmo',
  'goojin',
  'gaasin',
  'miikan',
  'dnawa',
  'gbeshi',
  'debwe',
  'migzhe',
  'daabaan',
  'ziigbii',
  'mdoodoo',
  'begish',
  'aadoowii',
  'waaswaa',
  'miigwe',
  'engaach',
  'biiwan',
  'oojiins',
  'mkawi',
  'neyaap',
  'shange',
  'waawan',
  'maazhbii',
  'jiigke',
  'kakzhe',
  'zhoonyaa',
  'boonam',
  'shagwe',
  'nookzi',
  'dkibi',
  'wiinno',
  'waagosh',
  'gnwesh',
  'aatebii',
  'bkade',
  'shkose',
  'gzhiza',
  'maagzhaa',
  'shtaahaa',
  'nmanj',
  'maajtaa',
  'niibna',
  'giimooch',
  'giigda',
  'aanind',
  'bgiza',
  'niwin',
  'nbagaa',
  'zhkipo',
  'maakzi',
  'zhebwe',
  'aanawii',
  'biiway',
  'bizwaa',
  'nshike',
  'nshitoo',
  'biinzi',
  'yekzi',
  'niikmo',
  'gtaaji',
  'eshkam',
  'kawesh',
  'mookse',
  'giipzi',
  'bmaashi',
  'koojiish',
  'geget',
  'boontaa',
  'aabshkaa',
  'gaadoon',
  'waaboos',
  'washta',
  'jaagde',
  'zhebza',
  'maanda',
  'maapiich',
  'zhngop',
  'zhaabooz',
  'dkaji',
  'sabke',
  'dkate',
  'bikan',
  'megwaa',
  'bangii',
  'njida',
  'wewiip',
  'gzhiiwe',
  'gaazhak',
  'booskaa',
  'neniizh',
  'nwanj',
  'gaawiin',
  'aawdoon',
  'wiikenh',
  'baaskaa',
  'zhiishiip',
  'ziiwan',
  'zgime',
  'zhanda',
  'bekish',
  'nootaan',
  'zaawzi',
  'wiinwaa',
  'wiikse',
  'daawmaa',
  'gzike',
  'noomya',
  'debse',
  'aatese',
  'mdida',
  'gegpii',
  'bmoode',
  'jiiskii',
  'waayaak',
  'goodoon',
  'gozhen',
  'maamaanh',
  'aabnaan',
  'nahaaw',
  'zhaabwii',
  'shoogan',
  'mshkiig',
  'shigan',
  'aakzin',
  'giinwi',
  'zzagaa',
  'zhoomin',
  'zenbaa',
  'jibwaa',
  'mgizi',
  'nsooza',
  'bejtaa',
  'wiinzi',
  'bizaan',
  'bkobii',
  'jiibik',
  'gdoode',
  'mbigi',
  'biigza',
  'jaagse',
  'bweza',
  'mskwi',
  'bbagaa',
  'dshing',
  'pagza',
  'wenesh',
  'jikenh',
  'nimosh',
  'ektaan',
  'niinwi',
  'dching',
  'miijin',
  'zhitoon',
  'giibse',
  'zegzi',
  'aandek',
  'neyiizh',
  'shkode',
  'geniin',
  'sabaap',
  'gnimaa',
  'nbiikaa',
  'zaagkii',
  'giizhge',
  'maampii',
  'bzhiki',
  'bkaagii',
  'bngwi',
  'gbagaa',
  'aasnaan',
  'ngoji',
  'zasaan',
  'gkina',
  'nsing',
  'aabdat',
  'dsooza',
  'boonse',
  'gdaashi',
  'giiwenh',
  'chaawse',
  'waawaach',
  'gaawye',
  'zkide',
  'zhedbi',
  'esban',
  'niibin',
  'dkamii',
  'gsinaa',
  'wiiyaas',
  'wiisni',
  'giiwse',
  'zoogpo',
  'waaban',
  'mbaashi',
  'wiigop',
  'ziigse',
  'baazmaa',
  'oodetoo',
  'penmo',
  'mnidoo',
  'dzhiike',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}