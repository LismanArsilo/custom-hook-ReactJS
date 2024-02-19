import React, { useRef } from "react";
import LoginImperative from "./LoginImperative";

const ImperativeHandle = () => {
  const loginRef = useRef();

  return (
    <main>
      <LoginImperative ref={loginRef} />
      <p>Parent Component</p>
      <button onClick={() => loginRef.current.setLogin()}>
        Login Dari Parent
      </button>
    </main>
  );
};

export default ImperativeHandle;
