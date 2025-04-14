"use client";
import { useState } from "react";
import { forwardChaining, ScoredResult } from "../lib/forwardChaining";
import Button from "./Button";
import Result from "./Result";
import { minat, rules } from "../lib/data";

const Start = () => {
  // State untuk melacak langkah pertanyaan saat ini (indeks soal yang ditampilkan)
  const [currentStep, setCurrentStep] = useState(0);

  // State untuk menyimpan jawaban user dalam bentuk ID kondisi yang dipilih (jawaban "Ya")
  const [selected, setSelected] = useState<string[]>([]);

  // State untuk menyimpan hasil akhir dari forward chaining (berisi skor rekomendasi jurusan)
  const [hasil, setHasil] = useState<ScoredResult[] | null>(null);

  // Ambil pertanyaan saat ini dari daftar pertanyaan berdasarkan langkah
  const currentQuestion = minat[currentStep];

  // Fungsi ini dipanggil saat user menjawab pertanyaan
  const handleAnswer = (jawaban: boolean) => {
    // Jika user menjawab "Ya", simpan ID kondisi ke dalam selected
    if (jawaban) {
      setSelected((prev) => [...prev, currentQuestion.id]);
    }

    // Jika masih ada pertanyaan berikutnya, lanjut ke pertanyaan selanjutnya
    if (currentStep < minat.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Jika sudah di pertanyaan terakhir, lakukan forward chaining

      // Gabungkan semua jawaban "Ya" sebelumnya + jawaban terakhir (jika "Ya")
      const result = forwardChaining(
        [...selected, jawaban ? currentQuestion.id : ""], // Jika "Tidak", tambahkan string kosong agar tidak menambah fakta
        rules // Aturan-aturan untuk forward chaining
      );

      // Simpan hasilnya ke state hasil
      setHasil(result);
    }
  };

  // Fungsi untuk mereset semua state kembali ke kondisi awal
  const reset = () => {
    setCurrentStep(0); // Kembali ke pertanyaan pertama
    setSelected([]); // Kosongkan jawaban yang dipilih
    setHasil(null); // Hapus hasil rekomendasi
  };

  return (
    <div className="flex flex-col gap-5 px-5">
      {!hasil ? (
        <>
          <h1 className="font-bold text-lg md:text-xl text-amber-500">
            Pertanyaan {currentStep + 1} dari {minat.length}
          </h1>
          <p className="font-normal md:font-medium text-sm md:text-lg text-zinc-800">
            {currentQuestion.label}
          </p>
          <div className="flex justify-start gap-5">
            <Button onClick={() => handleAnswer(true)}>Ya</Button>
            <Button
              onClick={() => handleAnswer(false)}
              className="bg-orange-600"
            >
              Tidak
            </Button>
          </div>
        </>
      ) : (
        <Result hasil={hasil} onReset={reset} />
      )}
    </div>
  );
};

export default Start;
