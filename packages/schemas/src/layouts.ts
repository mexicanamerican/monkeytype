import { z } from "zod";
import { customEnumErrorHandler } from "./util";

export const LayoutNameSchema = z.enum([
    "qwerty",
    "dvorak",
    "colemak",
    "colemak_wide",
    "colemak_dh",
    "colemak_dh_iso",
    "colemak_dh_wide",
    "colemak_dh_iso_wide",
    "colemak_dhk",
    "colemak_dh_matrix",
    "colemak_dhk_iso",
    "colemak_dhv",
    "qwertz",
    "swiss_german",
    "swiss_french",
    "workman",
    "prog_workman",
    "turkish_q",
    "turkish_f",
    "turkish_e",
    "MTGAP_ASRT",
    "norman",
    "halmak",
    "QGMLWB",
    "QGMLWY",
    "qwpr",
    "uk_qwerty",
    "spanish_qwerty",
    "italian_qwerty",
    "latam_qwerty",
    "prog_dvorak",
    "prog_dvorak_prime",
    "german_dvorak",
    "german_dvorak_imp",
    "spanish_dvorak",
    "swedish_colemak",
    "swedish_dvorak",
    "dvorak_L",
    "dvorak_R",
    "dvorak_fr",
    "azerty",
    "bepo",
    "bepo_AFNOR",
    "alpha",
    "handsdown",
    "hungarian",
    "handsdown_alt",
    "handsdown_promethium",
    "typehack",
    "MTGAP",
    "MTGAP_full",
    "ina",
    "soul",
    "niro",
    "mongolian",
    "JCUKEN",
    "Diktor",
    "Diktor_VoronovMod",
    "Redaktor",
    "JUIYAF",
    "Zubachev",
    "ISRT",
    "ISRT_Angle",
    "colemak_Qix",
    "colemak_Qi",
    "colemaQ",
    "colemaQ_F",
    "engram",
    "engrammer",
    "semimak",
    "semimak_jq",
    "semimak_jqc",
    "canary",
    "canary_matrix",
    "japanese_hiragana",
    "boo",
    "boo_mangle",
    "APT",
    "APT_angle",
    "middlemak",
    "middlemak-nh",
    "hindi_inscript",
    "thai_kedmanee",
    "thai_pattachote",
    "thai_manoonchai",
    "persian_standard",
    "persian_farsi",
    "arabic_101",
    "arabic_102",
    "arabic_mac",
    "hebrew",
    "urdu_phonetic",
    "brasileiro_nativo",
    "Foalmak",
    "quartz",
    "arensito",
    "ARTS",
    "beakl_15",
    "beakl_19",
    "beakl_19_bis",
    "capewell_dvorak",
    "colman",
    "heart",
    "klauser",
    "oneproduct",
    "pine",
    "real",
    "rolll",
    "stndc",
    "three",
    "uciea",
    "asset",
    "dwarf",
    "flaw",
    "whorf",
    "whorf6",
    "whorfmax",
    "whorfmax_ortho",
    "sertain",
    "ctgap",
    "octa8",
    "polish_programmers",
    "bulgarian",
    "bulgarian_phonetic_traditional",
    "belarusian",
    "ukrainian",
    "russian",
    "neo",
    "bone",
    "AdNW",
    "mine",
    "noted",
    "koy",
    "3l",
    "korean",
    "ekverto_b",
    "nerps",
    "sturdy_angle_ansi",
    "sturdy_angle_iso",
    "sturdy_ortho",
    "ABNT2",
    "HiYou",
    "xenia",
    "xenia_alt",
    "burmese",
    "gallium",
    "gallium_angle",
    "gallium_v2",
    "gallium_v2_matrix",
    "maya",
    "gallaya_angle_ansi",
    "gallaya_angle_iso",
    "gallaya_matrix",
    "nila",
    "minimak_4k",
    "minimak_8k",
    "minimak_12k",
    "optimot",
    "norwegian_qwerty",
    "portuguese_pt_qwerty_iso",
    "portuguese_pt_qwerty_ansi",
    "swedish_qwerty",
    "danish_qwerty",
    "noctum",
    "graphite",
    "graphite_angle",
    "graphite_angle_vc",
    "graphite_angle_kp",
    "graphite_matrix",
    "macedonian",
    "UGJRMV",
    "pashto",
    "ORNATE",
    "estonian",
    "stronk",
    "dhorf",
    "recurva",
    "seht-drai",
    "ints",
    "rollla",
    "wreathy",
    "saiga",
    "saiga-e",
    "krai",
    "mir",
    "ergol",
    "cascade",
    "vylet",
    "hyperroll",
    "romak",
    "scythe",
    "inqwerted",
    "rain",
    "night",
    "whix2",
    "haruka",
    "kuntum",
    "anishtro",
    "Kuntem",
    "BEAKL_Zi",
    "snorkle",
    "MALTRON",
    "PRSTEN",
    "RSTHD",
    "dusk",
    "zenith",
    "focal",
    "panini",
    "panini_wide",
    "ergopti",
    "sword",
    "opy",
    "tarmak_1",
    "tarmak_2",
    "tarmak_3",
    "tarmak_4",
  ], 
  {
    errorMap: customEnumErrorHandler("Must be a supported layout"),
  }
);

export type LayoutName = z.infer<typeof LayoutNameSchema>;
