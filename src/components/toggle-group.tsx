"use client";

import classNames from "classnames";

type Props = {
  groups: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: string;
};

const ToggleGroup = ({ groups, handleClick, active }: Props) => (
  <div className="w-full flex justify-between rounded font-mono overflow-clip border-2 border-black">
    {groups.map((group) => (
      <button
        key={group}
        className={classNames(
          "transition-color duration-200",
          "w-full p-2",
          active === group ? "bg-black text-white font-bold" : ""
        )}
        onClick={handleClick}
      >
        {group}
      </button>
    ))}
  </div>
);

export default ToggleGroup;
