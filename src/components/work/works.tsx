"use client";

import { useState } from "react";
import ToggleGroup from "../toggle-group";
import { works } from "@/consts/works";

const skills = ["Features", "UI/UX", "Performance"];

const Works = () => {
  const [active, setActive] = useState(skills[0]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setActive(e.currentTarget.textContent as string);

  return (
    <>
      <ToggleGroup groups={skills} handleClick={handleClick} active={active} />
      <ul className="w-full py-6 flex flex-col gap-6">
        {works[active as keyof typeof works].map((work) => (
          <li key={work.title} className="flex flex-col gap-4">
            <h3 className="text-lg font-mono font-semibold border-b pb-2 text-gray-700">
              {work.title}
            </h3>
            <ul className="pl-8 text-gray-500 flex flex-col gap-2">
              {work.contents.map((content) => (
                <li key={content} className="list-disc">
                  {content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Works;
