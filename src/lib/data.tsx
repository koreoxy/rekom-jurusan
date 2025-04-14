import { Rule } from "./forwardChaining";

export const rules: Rule[] = [
  {
    conditions: ["suka_matematika", "logika_baik", "tertarik_teknologi"],
    conclusion: "Teknik Informatika",
  },
  {
    conditions: ["suka_biologi", "peduli_kesehatan", "tertarik_anatomi"],
    conclusion: "Kedokteran",
  },
  {
    conditions: ["suka_menggambar", "kreatif", "suka_warna"],
    conclusion: "Desain Komunikasi Visual",
  },
  {
    conditions: ["suka_membaca", "senang_menganalisis", "komunikatif"],
    conclusion: "Ilmu Komunikasi",
  },
  {
    conditions: ["suka_berhitung", "detail_oriented", "suka_ekonomi"],
    conclusion: "Akuntansi",
  },
];

export const minat = [
  {
    id: "suka_matematika",
    label: "Apakah Anda menyukai mata pelajaran Matematika?",
  },
  {
    id: "logika_baik",
    label: "Apakah Anda merasa memiliki kemampuan logika yang baik?",
  },
  {
    id: "tertarik_teknologi",
    label: "Apakah Anda tertarik dengan perkembangan teknologi?",
  },
  { id: "suka_biologi", label: "Apakah Anda menyukai pelajaran Biologi?" },
  {
    id: "peduli_kesehatan",
    label: "Apakah Anda peduli terhadap isu-isu kesehatan?",
  },
  {
    id: "tertarik_anatomi",
    label: "Apakah Anda tertarik mempelajari tubuh manusia (anatomi)?",
  },
  {
    id: "suka_menggambar",
    label: "Apakah Anda suka menggambar sebagai hobi atau kegiatan serius?",
  },
  { id: "kreatif", label: "Apakah Anda merasa memiliki jiwa yang kreatif?" },
  {
    id: "suka_warna",
    label: "Apakah Anda senang bermain dengan warna dan bentuk visual?",
  },
  {
    id: "suka_membaca",
    label: "Apakah Anda senang membaca artikel, buku, atau berita?",
  },
  {
    id: "senang_menganalisis",
    label: "Apakah Anda suka menganalisis informasi atau data?",
  },
  {
    id: "komunikatif",
    label: "Apakah Anda mudah berkomunikasi dengan orang lain?",
  },
  {
    id: "suka_berhitung",
    label: "Apakah Anda senang berhitung atau membuat perhitungan keuangan?",
  },
  {
    id: "detail_oriented",
    label: "Apakah Anda teliti dalam menyelesaikan suatu tugas?",
  },
  {
    id: "suka_ekonomi",
    label: "Apakah Anda tertarik dengan dunia ekonomi atau bisnis?",
  },
];
