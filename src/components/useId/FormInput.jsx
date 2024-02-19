import React, { useId } from "react";

const FormInput = ({ data }) => {
  const id = useId();
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id}>{data.item}</label>
      <input
        type="text"
        id={id}
        className="border rounded-md px-2 py-1 text-sm"
      />
    </div>
  );
};

export default FormInput;
