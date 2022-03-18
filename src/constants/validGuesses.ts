import { CONFIG } from './config'

export const VALIDGUESSES = [
  "koobnaa",
  "bmawaa",
  "dkaaboo",
  "biismaa",
  "zhiinat",
  "niizhik",
  "mboomaa",
  "mmaachaa",
  "weshin",
  "mdaabii",
  "pagnaa",
  "baasmaa",
  "washta",
  "bbiiwaa",
  "biigza",
  "mnise",
  "wiibge",
  "eshkan",
  "shpaazi",
  "nwaawe",
  "bnishe",
  "gzaabii",
  "mazhwe",
  "niizhna",
  "miijim",
  "zegzi",
  "ziinde",
  "aawdoon",
  "naagshi",
  "bgona",
  "moozh'aa",
  "gnibii",
  "nooj'aa",
  "mdewe",
  "miikwaa",
  "zasaanh",
  "pabin",
  "wenbi",
  "pa'di",
  "giigda",
  "gaawiin",
  "niisse",
  "zhkipo",
  "noodza",
  "aatewaa",
  "nwaade",
  "giijtaa",
  "noongo",
  "nzikaa",
  "geget",
  "dzhimaa",
  "koozde",
  "maa'am",
  "gegoon",
  "bgowaa",
  "njine",
  "nsing",
  "mwizo",
  "bookmaa",
  "nanaan",
  "moozhwaa",
  "bookwaa",
  "poodoon",
  "bekish",
  "naasaap",
  "niibwa",
  "neniish",
  "maazh'aa",
  "pichiinh",
  "pakwe",
  "gshi'aa",
  "gnaa'aa",
  "boonse",
  "engaach",
  "jibwaa",
  "zhiknaa",
  "aazhbik",
  "nootwaa",
  "jiibse",
  "goojin",
  "dpakii",
  "negmaa",
  "taadbii",
  "naabna",
  "gnwesh",
  "gegwa",
  "aakzin",
  "bagnaa",
  "nootaan",
  "migwii",
  "dkoonaa",
  "maj'aa",
  "gesnaa",
  "zhiignaa",
  "naabmaa",
  "zhebza",
  "nitaan",
  "goknaa",
  "bejtaa",
  "naammaa",
  "jejna",
  "zhngos",
  "bekish",
  "naw'o",
  "truck",
  "dende",
  "iw pii",
  "ndesk",
  "gaadaan",
  "migzhe",
  "wiinan",
  "disge",
  "gesnaa",
  "wniike",
  "sabaap",
  "nigni",
  "niigaan",
  "pidoon",
  "jenjii",
  "baagnaa",
  "mnidoo",
  "nadnaa",
  "waabzi",
  "biinsaa",
  "zebwe",
  "dkoozi",
  "baaskaa",
  "swese",
  "shkime",
  "gnamaa",
  "negaw",
  "biinat",
  "biiszi",
  "nmetoo",
  "boonse",
  "naazhse",
  "aanjig",
  "naazhnaa",
  "eshkam",
  "aanshge",
  "baasaan",
  "gzhiikaa",
  "boonmaa",
  "ndawaa",
  "zaagoonh",
  "shkikaa",
  "ndomaa",
  "gnige",
  "dpoode",
  "nanda",
  "noon'aa",
  "debbii",
  "jaagse",
  "siikzi",
  "neniizh",
  "daakaan",
  "napza",
  "aandbi",
  "zhikde",
  "mgozi",
  "zhiishiip",
  "biitgi",
  "negaach",
  "shoonaan",
  "gashki",
  "mdoodoo",
  "aab'waa",
  "bkonaa",
  "booskaa",
  "doopon",
  "waabmaa",
  "waaboos",
  "zhichge",
  "nawach",
  "mwi'aa",
  "debwe",
  "piitzo",
  "gwaawe",
  "mbigi",
  "zaambii",
  "waabzii",
  "zaagda",
  "swekaa",
  "aawnsa",
  "doodwaa",
  "gobzo",
  "zhoonyaa",
  "pishmaa",
  "zkiza",
  "gnooyaa",
  "bkaagii",
  "giizhgi",
  "nswaak",
  "bminaa",
  "dnawa",
  "gtizi",
  "zgaabii",
  "aaning",
  "baapish",
  "spogi",
  "kajgaa",
  "nhaadwe",
  "naasmii",
  "miigon",
  "bngwi",
  "niiwek",
  "njida",
  "shkose",
  "nitam",
  "naanan",
  "biigde",
  "kewis",
  "ziigbii",
  "mkawi",
  "biiway",
  "mbaashi",
  "zhinmaa",
  "shoogen",
  "dbawaa",
  "bniizo",
  "wiinno",
  "aazhgan",
  "nbagaa",
  "ziignaa",
  "bkawaa",
  "zenbaa",
  "debnaa",
  "biigwaa",
  "pa'we",
  "dbasii",
  "nahaaw",
  "nimgaa",
  "shagwaa",
  "madnaa",
  "zhaabbii",
  "mna'aa",
  "baagshi",
  "giikji",
  "naanzhe",
  "nagish",
  "zhaabooz",
  "mbawaa",
  "jiitat",
  "nzikaa",
  "daawni",
  "gbode",
  "gshizi",
  "ziigse",
  "biin'aa",
  "mji'aa",
  "shkomaa",
  "zhebnaa",
  "wezh'o",
  "aasnaan",
  "baaswaa",
  "wiikse",
  "magkii",
  "shigan",
  "nsooza",
  "bkiiwii",
  "nookde",
  "memoon",
  "gzhaanaa",
  "gaaway",
  "zaag'aa",
  "gaawmaa",
  "swese",
  "gchi'aa",
  "dis'aa",
  "nmanj",
  "zhanda",
  "gtige",
  "mnobii",
  "dzhi'aa",
  "shange",
  "zhaabza",
  "giisaach",
  "maazhbii",
  "nishin",
  "dzhitaa",
  "gnoozi",
  "geget",
  "jaagse",
  "nagmaa",
  "daawen",
  "mansa",
  "nitoon",
  "giizhde",
  "niig'aa",
  "kognaa",
  "giinwaa",
  "ektaan",
  "pizza",
  "aabshkaa",
  "gzhaate",
  "waaban",
  "ndoshe",
  "noopon",
  "mdewi",
  "giiwne",
  "bnawaa",
  "zhoomin",
  "shpizi",
  "zhebtoo",
  "wiinge",
  "mnatoo",
  "zhegmaa",
  "wiidge",
  "gpagaa",
  "nimosh",
  "giizh'aa",
  "naabza",
  "biim'aa",
  "dpine",
  "zaagkii",
  "dagat",
  "nwapo",
  "Endroo",
  "gekaanh",
  "poojge",
  "maampii",
  "gdaame",
  "gmaapii",
  "shkigi",
  "shtaahaa",
  "giinzi",
  "samzi",
  "wiikenh",
  "giibwaa",
  "nhimkii",
  "nwebi",
  "esbaanh",
  "nshike",
  "gwaji",
  "bizaan",
  "dshing",
  "mskwi",
  "biiwan",
  "waaggi",
  "noogse",
  "njijii",
  "aagoowaa",
  "nensi",
  "gaapzi",
  "waan'aa",
  "jiimaan",
  "bkade",
  "nikde",
  "kokwe",
  "giiwzi",
  "ziinmaa",
  "dbakii",
  "biidwaa",
  "nigwa",
  "giibse",
  "zhishin",
  "bweza",
  "sabke",
  "aa haaw",
  "shki'aa",
  "aabdek",
  "piichgi",
  "zhiwnaa",
  "gtaaji",
  "naaknaa",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
