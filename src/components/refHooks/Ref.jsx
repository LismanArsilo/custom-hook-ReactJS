import React, { useState, useRef } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);

  // Note
  // UseRef berjalan tanpa melakukan render jadi tidak dapat di gunakan seperti state. Walaupun nilai berubah tapi tidak bisa di tampilkan karena tidak melakukan render. UseRef di gunakan untuk melakukan perubahan tanpa melakukan render.

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p className="text-center">Hello UseRef</p>
      <div className="flex items-center justify-center mt-10 gap-2">
        <input ref={inputRef} type="text" className="border p-1 text-sm" />
        <button className="bg-blue-600 rounded-md p-1" onClick={focus}>
          Click Focus
        </button>
      </div>
    </div>
  );
};

export default Ref;
