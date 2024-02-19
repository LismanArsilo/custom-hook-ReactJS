import React, { useCallback, useState } from "react";
import List from "./List";

// UseCallback hampir sama dengan UseMemo jika usememo return hasil dari function tersebut sedangkan usecallback mereturn functionnya.

// Penggunaannya sama seperti usememo jika terlalu banyak maka akan mengkibatkan peformance issue
const Callback = () => {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);
  console.info("Parent Render");

  const handlerCallback = useCallback(
    (event) => {
      console.info("Your Cick", event.currentTarget);
    },
    [dep]
  );

  const stateHandler = () => {
    setState((state) => !state);
  };

  return (
    <div className="text-center mt-10">
      <button
        className="px-4 py-2 rounded-md bg-blue-300"
        onClick={stateHandler}
      >
        Change State Of Parent Component
      </button>
      <List handlerCallback={handlerCallback} />
      <button
        className="px-4 py-2 rounded-md bg-blue-300"
        onClick={() => setDep((dep) => !dep)}
      >
        Change Dependency
      </button>
    </div>
  );
};

export default Callback;
