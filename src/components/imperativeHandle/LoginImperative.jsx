import React, { forwardRef, useImperativeHandle, useState } from "react";

const LoginImperative = (props, ref) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  useImperativeHandle(ref, () => ({
    setLogin: handleLogin,
  }));

  return (
    <div className="bg-black py-5">
      <ul className="">
        <li className="">
          <a
            className={`p-5 ${!isLogin ? "bg-blue-400" : "bg-red-400"}`}
            onClick={handleLogin}
          >
            {!isLogin ? "Login" : "Logout"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default forwardRef(LoginImperative);
