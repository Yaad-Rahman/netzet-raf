import React from "react";
import { ListProps } from "./list.type";

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-none pl-0 flex flex-col gap-2.5 md:gap-[13px]">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-[10px] items-center text-base leading-[22px] text-white font-medium md:font-semibold"
        >
          <span>✨</span>
          {item}
        </li>
      ))}
    </ul>
  );
};
