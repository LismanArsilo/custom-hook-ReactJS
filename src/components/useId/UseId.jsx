import React, { useState } from "react";
import FormInput from "./FormInput";
import useIdDatas from "../../data/dataUseId";

// Note: UseId dapat memberikan nilai unique, cara menggunakan useid sama dengan usememo dan usecallback jika di gunakan berlebihan akan membuat performance issue

const UseId = () => {
  const [datas, setDatas] = useState(useIdDatas);

  return (
    <div>
      <form
        action="#"
        className="flex flex-col justify-center items-center border gap-2"
      >
        {datas &&
          datas.map((data) => {
            return <FormInput key={data.id} data={data} />;
          })}
      </form>
    </div>
  );
};

export default UseId;
