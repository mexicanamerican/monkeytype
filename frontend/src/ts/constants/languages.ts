import { Language, LanguageSchema } from "@monkeytype/schemas/languages";

export const LanguageList: Language[] = LanguageSchema._def.values;

export const LanguageGroups: Record<string, Language[]> = {
  english: [
    "english",
    "english_1k",
    "english_5k",
    "english_10k",
    "english_25k",
    "english_450k",
    "english_commonly_misspelled",
    "english_contractions",
    "english_doubleletter",
    "english_shakespearean",
    "english_old",
    "english_medical",
  ],
  spanish: ["spanish", "spanish_1k", "spanish_10k", "spanish_650k"],
  french: [
    "french",
    "french_1k",
    "french_2k",
    "french_10k",
    "french_600k",
    "french_bitoduc",
  ],
  german: ["german", "german_1k", "german_10k", "german_250k"],
  swiss_german: ["swiss_german", "swiss_german_1k", "swiss_german_2k"],
  portuguese: [
    "portuguese",
    "portuguese_1k",
    "portuguese_3k",
    "portuguese_5k",
    "portuguese_320k",
    "portuguese_550k",
    "portuguese_acentos_e_cedilha",
  ],
  arabic: ["arabic", "arabic_10k"],
  arabic_egypt: ["arabic_egypt", "arabic_egypt_1k"],
  arabic_morocco: ["arabic_morocco"],
  italian: [
    "italian",
    "italian_1k",
    "italian_7k",
    "italian_60k",
    "italian_280k",
  ],
  friulian: ["friulian"],
  latin: ["latin"],
  afrikaans: ["afrikaans", "afrikaans_1k", "afrikaans_10k"],
  mongolian: ["mongolian", "mongolian_10k"],
  korean: ["korean", "korean_1k", "korean_5k"],
  khmer: ["khmer"],
  marathi: ["marathi"],
  chinese: [
    "chinese_traditional",
    "chinese_simplified",
    "chinese_simplified_1k",
    "chinese_simplified_5k",
    "chinese_simplified_10k",
    "chinese_simplified_50k",
  ],
  russian: [
    "russian",
    "russian_1k",
    "russian_5k",
    "russian_10k",
    "russian_25k",
    "russian_50k",
    "russian_375k",
    "russian_contractions",
    "russian_contractions_1k",
    "russian_abbreviations",
  ],
  polish: [
    "polish",
    "polish_2k",
    "polish_5k",
    "polish_10k",
    "polish_20k",
    "polish_40k",
    "polish_200k",
  ],
  czech: ["czech", "czech_1k", "czech_10k"],
  slovak: ["slovak", "slovak_1k", "slovak_10k"],
  ukrainian: [
    "ukrainian",
    "ukrainian_1k",
    "ukrainian_10k",
    "ukrainian_50k",
    "ukrainian_endings",
  ],
  ukrainian_latynka: [
    "ukrainian_latynka",
    "ukrainian_latynka_1k",
    "ukrainian_latynka_10k",
    "ukrainian_latynka_50k",
    "ukrainian_latynka_endings",
  ],
  lithuanian: ["lithuanian", "lithuanian_1k", "lithuanian_3k"],
  indonesian: ["indonesian", "indonesian_1k", "indonesian_10k"],
  kurdish_central: [
    "kurdish_central",
    "kurdish_central_2k",
    "kurdish_central_4k",
  ],
  greek: ["greek", "greek_1k", "greek_5k", "greek_10k", "greek_25k"],
  greeklish: [
    "greeklish",
    "greeklish_1k",
    "greeklish_5k",
    "greeklish_10k",
    "greeklish_25k",
  ],
  turkish: ["turkish", "turkish_1k", "turkish_5k"],
  irish: ["irish"],
  galician: ["galician"],
  thai: [
    "thai",
    "thai_1k",
    "thai_5k",
    "thai_10k",
    "thai_20k",
    "thai_50k",
    "thai_60k",
  ],
  tamil: ["tamil", "tamil_1k", "tanglish", "tamil_old"],
  kannada: ["kannada"],
  telugu: ["telugu", "telugu_1k"],
  slovenian: ["slovenian", "slovenian_1k", "slovenian_5k"],
  croatian: ["croatian", "croatian_1k"],
  dutch: ["dutch", "dutch_1k", "dutch_10k"],
  filipino: ["filipino", "filipino_1k"],
  danish: ["danish", "danish_1k", "danish_10k"],
  hungarian: ["hungarian", "hungarian_2k"],
  norwegian_bokmal: [
    "norwegian_bokmal",
    "norwegian_bokmal_1k",
    "norwegian_bokmal_5k",
    "norwegian_bokmal_10k",
    "norwegian_bokmal_150k",
    "norwegian_bokmal_600k",
  ],
  norwegian_nynorsk: [
    "norwegian_nynorsk",
    "norwegian_nynorsk_1k",
    "norwegian_nynorsk_5k",
    "norwegian_nynorsk_10k",
    "norwegian_nynorsk_100k",
    "norwegian_nynorsk_400k",
  ],
  hebrew: ["hebrew", "hebrew_1k", "hebrew_5k", "hebrew_10k"],
  icelandic: ["icelandic_1k"],
  malagasy: ["malagasy", "malagasy_1k"],
  malay: ["malay", "malay_1k"],
  romanian: [
    "romanian",
    "romanian_1k",
    "romanian_5k",
    "romanian_10k",
    "romanian_25k",
    "romanian_50k",
    "romanian_100k",
    "romanian_200k",
  ],
  finnish: ["finnish", "finnish_1k", "finnish_10k"],
  estonian: ["estonian", "estonian_1k", "estonian_5k", "estonian_10k"],
  udmurt: ["udmurt"],
  welsh: ["welsh", "welsh_1k"],
  persian: [
    "persian",
    "persian_1k",
    "persian_5k",
    "persian_20k",
    "persian_romanized",
  ],
  kazakh: ["kazakh", "kazakh_1k"],
  vietnamese: ["vietnamese", "vietnamese_1k", "vietnamese_5k"],
  jyutping: ["jyutping"],
  pinyin: ["pinyin", "pinyin_1k", "pinyin_10k"],
  hausa: ["hausa", "hausa_1k"],
  swedish: ["swedish", "swedish_1k", "swedish_diacritics"],
  serbian: ["serbian", "serbian_latin", "serbian_10k", "serbian_latin_10k"],
  georgian: ["georgian"],
  yoruba: ["yoruba_1k"],
  swahili: ["swahili_1k"],
  maori: ["maori_1k"],
  catalan: ["catalan", "catalan_1k"],
  bulgarian: ["bulgarian", "bulgarian_latin"],
  bosnian: ["bosnian", "bosnian_4k"],
  esperanto: [
    "esperanto",
    "esperanto_1k",
    "esperanto_10k",
    "esperanto_25k",
    "esperanto_36k",
    "esperanto_x_sistemo",
    "esperanto_x_sistemo_1k",
    "esperanto_x_sistemo_10k",
    "esperanto_x_sistemo_25k",
    "esperanto_x_sistemo_36k",
    "esperanto_h_sistemo",
    "esperanto_h_sistemo_1k",
    "esperanto_h_sistemo_10k",
    "esperanto_h_sistemo_25k",
    "esperanto_h_sistemo_36k",
  ],
  bangla: ["bangla", "bangla_letters", "bangla_10k"],
  urdu: ["urdu", "urdu_1k", "urdu_5k", "urdish"],
  albanian: ["albanian", "albanian_1k"],
  shona: ["shona", "shona_1k"],
  armenian: [
    "armenian",
    "armenian_1k",
    "armenian_western",
    "armenian_western_1k",
  ],
  myanmar: ["myanmar_burmese"],
  japanese: [
    "japanese_hiragana",
    "japanese_katakana",
    "japanese_romaji",
    "japanese_romaji_1k",
  ],
  hindi: ["hindi", "hindi_1k", "hinglish"],
  sanskrit: ["sanskrit", "sanskrit_roman"],
  gujarati: ["gujarati", "gujarati_1k"],
  nepali: ["nepali", "nepali_1k", "nepali_romanized"],
  santali: ["santali"],
  macedonian: [
    "macedonian",
    "macedonian_1k",
    "macedonian_10k",
    "macedonian_75k",
  ],
  uzbek: ["uzbek", "uzbek_1k", "uzbek_70k"],
  belarusian: [
    "belarusian",
    "belarusian_1k",
    "belarusian_5k",
    "belarusian_10k",
    "belarusian_25k",
    "belarusian_50k",
    "belarusian_100k",
  ],
  belarusian_lacinka: ["belarusian_lacinka", "belarusian_lacinka_1k"],
  tatar: ["tatar", "tatar_1k", "tatar_5k", "tatar_9k"],
  tatar_crimean: [
    "tatar_crimean",
    "tatar_crimean_1k",
    "tatar_crimean_5k",
    "tatar_crimean_10k",
    "tatar_crimean_15k",
    "tatar_crimean_cyrillic",
    "tatar_crimean_cyrillic_1k",
    "tatar_crimean_cyrillic_5k",
    "tatar_crimean_cyrillic_10k",
    "tatar_crimean_cyrillic_15k",
  ],
  azerbaijani: ["azerbaijani", "azerbaijani_1k"],
  malayalam: ["malayalam"],
  sinhala: ["sinhala"],
  latvian: ["latvian", "latvian_1k"],
  maltese: ["maltese", "maltese_1k"],
  toki_pona: ["toki_pona", "toki_pona_ku_suli", "toki_pona_ku_lili"],
  xhosa: ["xhosa", "xhosa_3k"],
  tibetan: ["tibetan", "tibetan_1k"],
  bashkir: ["bashkir"],
  other: [
    "lojban_gismu",
    "lojban_cmavo",
    "pig_latin",
    "twitch_emotes",
    "git",
    "typing_of_the_dead",
    "league_of_legends",
    "docker_file",
  ],
  amharic: ["amharic", "amharic_1k", "amharic_5k"],
  oromo: ["oromo", "oromo_1k", "oromo_5k"],
  wordle: ["wordle", "wordle_1k"],
  kyrgyz: ["kyrgyz", "kyrgyz_1k"],
  yiddish: ["yiddish"],
  frisian: ["frisian", "frisian_1k"],
  pashto: ["pashto"],
  euskera: ["euskera"],
  klingon: ["klingon", "klingon_1k"],
  quenya: ["quenya"],
  lorem_ipsum: ["lorem_ipsum"],
  occitan: ["occitan", "occitan_1k", "occitan_2k", "occitan_5k", "occitan_10k"],
  kabyle: ["kabyle", "kabyle_1k", "kabyle_2k", "kabyle_5k", "kabyle_10k"],
  zulu: ["zulu"],
  code: [
    "code_python",
    "code_python_1k",
    "code_python_2k",
    "code_python_5k",
    "code_c",
    "code_css",
    "code_csharp",
    "code_c++",
    "code_dart",
    "code_brainfck",
    "code_fsharp",
    "code_javascript",
    "code_javascript_1k",
    "code_javascript_react",
    "code_jule",
    "code_julia",
    "code_haskell",
    "code_html",
    "code_nim",
    "code_nix",
    "code_pascal",
    "code_java",
    "code_kotlin",
    "code_go",
    "code_rockstar",
    "code_rust",
    "code_ruby",
    "code_r",
    "code_r_2k",
    "code_swift",
    "code_scala",
    "code_bash",
    "code_powershell",
    "code_lua",
    "code_luau",
    "code_latex",
    "code_typst",
    "code_matlab",
    "code_sql",
    "code_perl",
    "code_php",
    "code_vim",
    "code_vimscript",
    "code_opencl",
    "code_visual_basic",
    "code_arduino",
    "code_systemverilog",
    "code_elixir",
    "code_gleam",
    "code_zig",
    "code_gdscript",
    "code_gdscript_2",
    "code_assembly",
    "code_v",
    "code_ook",
    "code_typescript",
    "code_cobol",
    "code_common_lisp",
    "code_odin",
    "code_fortran",
    "code_abap",
    "code_abap_1k",
  ],
  viossa: ["viossa", "viossa_njutro"],
};

export type LanguageGroupName = keyof typeof LanguageGroups;
export const LanguageGroupNames: LanguageGroupName[] = Array.from(
  Object.keys(LanguageGroups)
);

/**
 * Fetches the language group for a given language.
 * @param language The language code.
 * @returns the language group.
 */
export function getGroupForLanguage(
  language: Language
): LanguageGroupName | undefined {
  return LanguageGroupNames.find((group) => group.includes(language));
}
