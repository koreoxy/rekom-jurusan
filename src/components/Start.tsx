import { useState } from "react";
import Button from "./Button";
import Result from "./Result";

const Start = () => {
  const [shotResult, setShowResult] = useState(false);

  const onResult = () => {
    setShowResult(true);
  };

  return (
    <>
      {shotResult ? (
        <Result />
      ) : (
        <div className="flex flex-col gap-5 px-5">
          <h1 className="font-bold text-lg md:text-xl text-amber-500">
            Pertanyaan 1 dari 15
          </h1>
          <h2 className="font-normal md:font-medium text-sm md:text-lg text-zinc-800">
            Pertanyaan Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Et odit sequi dolorem voluptas ullam alias. Expedita adipisci
            similique quam ut laborum repellat! Maiores laudantium, blanditiis
            velit neque iure provident accusantium!
          </h2>
          <div className="flex justify-start gap-5">
            <Button onClick={onResult}>Hasil</Button>
            <Button className="bg-orange-600">Tidak</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Start;
