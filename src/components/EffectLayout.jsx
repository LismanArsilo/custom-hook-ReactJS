import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const EffectLayout = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useEffect(() => {
    // Menjalankan semua hingga selesai setelah re-render
    console.info("use effect running");
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 100; i++) {
      if (i === 100) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <div className="mx-10 h-[100vh] flex items-center justify-center">
      <section className="flex gap-4" ref={sectionRef} style={sectionStyle}>
        <button
          className="px-2 bg-green-900"
          onClick={() => setNumber((prev) => prev - 1)}
        >
          -
        </button>
        <span>{number}</span>
        <button
          className="px-2 bg-green-900"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          +
        </button>
      </section>
    </div>
  );
};

export default EffectLayout;
