import React, { useContext } from "react";
import { LoginContext } from "./Context";

const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div>
      <ul>
        <li
          className={`w-32 text-center py-5 px-10 hover:cursor-pointer bg-green-900 text-white ${
            isLogin ? "bg-danger-900" : "bg-blue-900"
          }`}
          onClick={handleLogin}
        >
          {isLogin ? "Logout" : "Login"}
        </li>
      </ul>
    </div>
  );
};

export default LoginButton;
