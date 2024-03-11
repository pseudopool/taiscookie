"use client";

import classNames from "classnames";
import { useState } from "react";

type Props = {
  groups: string[];
};

const ToggleGroup = ({ groups }: Props) => {
  const [active, setActive] = useState(groups[0]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setActive(e.currentTarget.textContent as string);

  return (
    <div className="w-full flex justify-between bg-gray-100 text-gray-500 rounded font-mono overflow-clip">
      {groups.map((group) => (
        <button
          key={group}
          className={classNames(
            "transition-color duration-200",
            "w-full p-2",
            active === group ? "bg-blue-300 text-black font-bold" : ""
          )}
          onClick={handleClick}
        >
          {group}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;
