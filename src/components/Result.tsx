import Button from "./Button";

const Result = () => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-lg md:text-xl text-amber-500">
        Hasil Rekomendasi Jurusan Kuliah yang cocok untuk kamu !
      </h1>

      <ul className="my-5 pr-52 text-zinc-700 font-semibold">
        <li className="flex flex-row justify-between">
          <span>Teknik Informatika</span>
          <span>Score : 3%</span>
        </li>
        <li className="flex flex-row justify-between">
          <span>Kedokteran</span>
          <span>Score : 3%</span>
        </li>
        <li className="flex flex-row justify-between">
          <span>Akuntasi</span>
          <span>Score : 3%</span>
        </li>
        <li className="flex flex-row justify-between">
          <span>Ilmu Komunikasi</span>
          <span>Score : 3%</span>
        </li>
      </ul>

      <Button>Ulangi Test</Button>
    </div>
  );
};

export default Result;
