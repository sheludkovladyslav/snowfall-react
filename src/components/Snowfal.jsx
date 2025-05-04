import { useState, useEffect } from "react";
import { CreateSnow } from "./CreateSnow";
import css from "./CreateSnow.module.css";

export const Snowfall = () => {
  const [snows, setSnows] = useState([]);

  useEffect(() => {
    let snowCount = 0;
    const maxSnows = 50;

    const createSnows = () => {
      if (snowCount > maxSnows) {
        setSnows([]);
        snowCount = 0;
      } else {
        const newSnow = {
          left: Math.floor(Math.random() * 100),
          color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)})`,
        };

        setSnows((prev) => [...prev, newSnow]);

        setTimeout(() => {
          createSnows();
        }, Math.floor(Math.random() * 1000));
      }
    };

    createSnows();
  }, []);

  return (
    <>
      {snows.map((snow) => {
        return <CreateSnow left={snow.left} color={snow.color}></CreateSnow>;
      })}
    </>
  );
};
