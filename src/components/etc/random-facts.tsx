"use client";

import Board from "../models/Board";
import FortuneCookie from "../models/FortuneCookie";

import { facts } from "@/consts/facts";
import { useState } from "react";

const RandomFacts = () => {
  const [randomFact, setRandomFact] = useState(facts[0]);
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

  return (
    <>
      <button onClick={handleClick} className="w-full">
        <Board>
          <FortuneCookie />
        </Board>
      </button>
      <p className="font-azeret w-full text-center px-8 break-keep">
        {randomFact}
      </p>
    </>
  );
};
export default RandomFacts;
