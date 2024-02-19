import React, { useContext } from "react";
import { LoginContext } from "./Context";

const Page = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);

  return (
    <div>
      {isLogin ? (
        <p className="text-center mt-10">Anda Sudah Login</p>
      ) : (
        <p className="text-center mt-10">Silahkan Login</p>
      )}
    </div>
  );
};

export default Page;
