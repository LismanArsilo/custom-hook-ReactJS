import React, { useEffect, useMemo, useState } from "react";

const getQuadrat = (num) => {
  console.log("Quadrat Running");
  for (let i = 0; i < 200000000; i++) {}
  console.log("Render");

  return num * num;
};

// Jika tidak menggunakan usememo maka ketika menjalankan button ganti color getQuadrat akan berjalan juga walaupun countnya tidak berubah karena re-render sama dengan melakukan ulang apa function yang ada.

// UseMemo hooks untuk meningkatkan peformance agar tidak menjalankan function yang tidak berubah dengan cara kerja memberikan depedency agar mengetahui variable apa yang ingin di tentukan.

// Jangan menggunakan usememo di dalem setiap function karena dapat memakan memory justru dapat membuat menjadi peformance issue. Perhatikan penggunaan dengan baik

const Memo = () => {
  const [count, setCount] = useState(0);
  const [redButton, setRedButton] = useState(false);
  const quadrat = useMemo(() => {
    return getQuadrat(count);
  }, [count]);
  const display = useMemo(() => {
    return {
      text: redButton ? "ClickMe For Bg-Blue" : "ClickMe For Bg-Red",
      color: `${redButton ? "bg-red-300" : "bg-blue-300"}`,
    };
  }, [redButton]);

  // Case UseMemo jika redButton tidak berubah maka tidak akan menjalankan ulang function display karena sudah di simpan di dalam memory

  useEffect(() => {
    console.info("display running");
  }, [display]);

  return (
    <div className="border h-[100vh] flex flex-col justify-center items-center gap-2">
      <h1 className="text-lg font-bold">Use Memo</h1>
      <div className="flex gap-2 items-center">
        <button
          className="px-2 py-1 bg-blue-300 rounded-md"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
        <span className="text-lg font-bold">{count}</span>
        <button
          className="px-2 py-1 bg-blue-300 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
      </div>
      <button
        className={`${display.color} px-2 py-1 rounded-lg`}
        onClick={() => setRedButton((redButton) => !redButton)}
      >
        {display.text}
      </button>
      <span>Amount Count Quadrat = {quadrat}</span>
    </div>
  );
};

export default Memo;
