import { ScoredResult } from "../lib/forwardChaining";
import Button from "./Button";

type ResultProps = {
  hasil: ScoredResult[];
  onReset: () => void;
};

const Result = ({ hasil, onReset }: ResultProps) => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-lg md:text-xl text-amber-500">
        Hasil Rekomendasi Jurusan Kuliah yang cocok untuk kamu !
      </h1>
      {hasil.length ? (
        <ul className="my-5 pr-20 text-zinc-700 font-semibold">
          {hasil.map((item) => (
            <li key={item.conclusion} className="flex flex-row justify-between">
              <span>{item.conclusion}</span>
              <span>Score: {item.score} %</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="my-5">
          <p className="text-zinc-700 text-lg">
            Tidak ditemukan jurusan berdasarkan jawaban Anda ulangi tes nya
            lagi.
          </p>
        </div>
      )}
      <Button onClick={onReset}>Ulangi Tes</Button>
    </div>
  );
};

export default Result;
