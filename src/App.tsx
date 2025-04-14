import { useState } from "react";
import Start from "./components/Start";
import Button from "./components/Button";

function App() {
  const [showStart, setShowStart] = useState(false);

  const onStart = () => {
    setShowStart(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-row w-full h-[50vh] border-2 border-amber-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="w-5/12 relative h-full hidden md:block">
            {/* Gambar bayangan */}
            <img
              src="/assets/C1.svg"
              alt="Character 1 shadow"
              className="absolute top-2 left-2 w-full h-full object-contain z-0 brightness-0 invert opacity-70"
            />

            {/* Gambar utama */}
            <img
              src="/assets/C1.svg"
              alt="Character 1"
              className="relative w-full h-full object-contain z-10"
            />
          </div>

          <div className="w-full md:w-7/12 h-full flex items-center">
            {showStart ? (
              <Start />
            ) : (
              <div className="flex flex-col gap-5 px-6">
                <h1 className="font-bold text-xl md:text-3xl text-white text-shadow-lg leading-snug">
                  Rekomendasi Jurusan Kuliah untuk kamu berdasarkan minat kamu!
                </h1>
                <div className="flex">
                  <Button onClick={onStart}>Start</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
