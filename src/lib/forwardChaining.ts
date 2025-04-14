// Tipe data untuk Rule: terdiri dari daftar kondisi dan satu kesimpulan
export interface Rule {
  conditions: string[]; // Daftar kondisi yang harus terpenuhi
  conclusion: string; // Kesimpulan jika kondisi terpenuhi
}

// Tipe data hasil akhir: kesimpulan dan skor dalam persen
export interface ScoredResult {
  conclusion: string; // Nama jurusan yang direkomendasikan
  score: number; // Skor kecocokan dalam bentuk persen
}

// Fungsi utama forward chaining
export function forwardChaining(
  facts: string[], // Fakta yang diberikan user (jawaban "Ya")
  rules: Rule[] // Aturan-aturan yang berisi kondisi dan kesimpulan
): ScoredResult[] {
  // Menyimpan skor sementara dalam bentuk array persen per kesimpulan
  const rawScores: Record<string, number[]> = {};

  // Iterasi setiap rule
  for (const rule of rules) {
    // Hitung berapa banyak kondisi dalam rule yang cocok dengan fakta user
    const matched = rule.conditions.filter((c) => facts.includes(c)).length;

    // Total kondisi yang dimiliki rule tersebut
    const total = rule.conditions.length;

    // Jika ada minimal 1 kondisi yang cocok, lanjutkan
    if (matched > 0) {
      // Hitung skor persen kecocokan rule ini
      const percentScore = (matched / total) * 100;

      // Jika kesimpulan belum ada di rawScores, inisialisasi array kosong
      if (!rawScores[rule.conclusion]) {
        rawScores[rule.conclusion] = [];
      }

      // Simpan skor persen ke array sesuai kesimpulannya
      rawScores[rule.conclusion].push(percentScore);
    }
  }

  // Ubah rawScores menjadi array hasil akhir dengan rata-rata skor
  const results: ScoredResult[] = Object.entries(rawScores).map(
    ([conclusion, scores]) => ({
      conclusion, // Nama jurusan
      score: parseFloat(
        (scores.reduce((acc, val) => acc + val, 0) / scores.length) // Rata-rata semua skor persen
          .toFixed(2) // Bulatkan ke 2 angka desimal
      ),
    })
  );

  // Urutkan hasil dari skor tertinggi ke terendah
  return results.sort((a, b) => b.score - a.score);
}
