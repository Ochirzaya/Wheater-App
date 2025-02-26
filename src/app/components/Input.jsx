import React from "react";
import { IoMdSearch } from "react-icons/io";

export const Input = () => {
  return (
    <div className="  flex  w-[567px] h-[80px] absolute z-20 rounded-[48px] bg-white  items-center justify-center">
      <IoMdSearch className="size-[48px] flex fill-gray-300" />
      <input className=" flex w-[455px] h-[44px]  py-4 focus-visible: outline-none text-black text-[32px]"></input>
    </div>
  );
};
