import React, { useEffect, useState, memo } from "react";
import callbackDatas from "../../data/dataCallback";

const List = ({ handlerCallback }) => {
  const [animals, setAnimals] = useState(callbackDatas);

  useEffect(() => {
    console.info("Child Component Render");
  }, [handlerCallback]);

  return (
    <div>
      {animals &&
        animals.map((animal) => {
          return (
            <div key={animal.id} onClick={handlerCallback}>
              <p>{animal.item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default memo(List);
