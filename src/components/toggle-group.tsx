"use client";

import classNames from "classnames";

type Props = {
  groups: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: string;
};

const ToggleGroup = ({ groups, handleClick, active }: Props) => {
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
