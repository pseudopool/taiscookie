"use client";

import { facts } from "@/consts/facts";
import Image from "next/image";
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
      <button onClick={handleClick} className="relative">
        <Image
          src="/assets/cookie.jpeg"
          width={150}
          height={150}
          alt="fortune cookie"
          className="rounded-full select-none m-6 border-4 border-black hover:brightness-75 transition-all duration-300 ease-in-out"
        />
        <div className="absolute top-9 right-9">
          <span className="relative flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-black border-2 border-black"></span>
          </span>
        </div>
      </button>
      <p className="font-azeret">{randomFact}</p>
    </>
  );
};
export default RandomFacts;
