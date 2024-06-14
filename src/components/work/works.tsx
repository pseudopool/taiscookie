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
  const [active, setActive] = useState(skills[0]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setActive(e.currentTarget.textContent as string);

  return (
    <>
      <ToggleGroup groups={skills} handleClick={handleClick} active={active} />
      <ul className="w-full py-6 flex flex-col gap-6">
        {works[active as keyof typeof works].map((work: Work) => (
          <li key={work.title} className="flex flex-col gap-3">
            <h3 className="text-lg font-medium border-b pb-2">{work.title}</h3>
            <ul className="pl-8 flex flex-col gap-2 text-gray-600">
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
