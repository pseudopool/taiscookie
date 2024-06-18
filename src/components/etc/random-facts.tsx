"use client";

import Board from "../models/Board";
import FortuneCookie from "../models/FortuneCookie";

import { facts } from "@/consts/facts";
import { useEffect, useState } from "react";

const RandomFacts = () => {
  const [randomFact, setRandomFact] = useState("");
  const [shownFacts, setShownFacts] = useState([randomFact]);

  const handleClick = () => {
    const newFact = facts[Math.floor(Math.random() * facts.length)];
    if (shownFacts.length === facts.length) {
      setShownFacts([newFact]);
      setRandomFact(newFact);
      return;
    }
    if (shownFacts.includes(newFact)) {
      handleClick();
      return;
    }
    setShownFacts([...shownFacts, newFact]);
    setRandomFact(newFact);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRandomFact("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [randomFact]);

  return (
    <>
      <p className="font-azeret text-center px-6 break-keep text-slate-400">
        Click and see what you get.
      </p>
      <button onClick={handleClick} className="w-full">
        <Board>
          <FortuneCookie />
        </Board>
      </button>
      <p
        className="absolute w-2/3 rotate-6 max-w-screen-sm font-azeret text-center px-2 py-1 bg-gray-100 break-keep transition-opacity duration-300 select-none"
        style={{
          opacity: randomFact ? 1 : 0,
          backgroundColor: randomFact
            ? "rgba(255, 255, 255, 0.9)"
            : "transparent",
          border: randomFact
            ? "2px solid rgba(0, 0, 0, 0.6)"
            : "2px solid transparent",
        }}
      >
        {randomFact}
      </p>
    </>
  );
};
export default RandomFacts;
