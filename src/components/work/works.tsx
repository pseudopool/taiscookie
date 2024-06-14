"use client";

import { useState } from "react";
import ToggleGroup from "../toggle-group";
import { Job } from "@/consts/works";

const skills = ["Features", "UI/UX", "Performance"];

type Props = {
  works: Job["works"];
};

type Work = {
  title: string;
  contents: string[];
};

const Works = ({ works }: Props) => {
  const [active, setActive] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === active) return setActive("");
    setActive(e.currentTarget.value as string);
  };

  return (
    <>
      <ToggleGroup groups={skills} handleClick={handleClick} active={active}>
        <ul className="w-full px-2 flex flex-col break-keep">
          {works[active as keyof typeof works]?.map((work: Work) => (
            <li
              key={work.title}
              className="grid grid-cols-10 border-b border-b-gray-500 py-4"
            >
              <h3 className="col-span-3 font-medium pb-2">{work.title}</h3>
              <ul className="col-span-7 pl-8 flex flex-col gap-2 font-light">
                {work.contents.map((content) => (
                  <li key={content}>{content}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ToggleGroup>
    </>
  );
};
export default Works;
