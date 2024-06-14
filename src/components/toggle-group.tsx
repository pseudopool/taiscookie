"use client";

import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  groups: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: string;
};

const ToggleGroup = ({ groups, handleClick, active, children }: Props) => (
  <div className="w-full flex flex-col">
    {groups.map((group) => (
      <>
        <button
          key={group}
          value={group}
          className={classNames(
            "w-full flex justify-between py-2 px-4 border-b-2 border-black text-xl",
            active === group ? "font-medium bg-highlight" : ""
          )}
          onClick={handleClick}
        >
          {group}
          <span>+</span>
        </button>
        {active === group && children}
      </>
    ))}
  </div>
);

export default ToggleGroup;
