import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { PiHeart } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

export const Sunny = () => {
  return (
    <div className="w-[414px] h-fit bg-[#F9FAFB] backdrop-blur-[12px] rounded-[48px]">
      <div className="flex items-center gap-[112px]  ">
        <div className="inline-flex  flex-col pl-[40px] py-[56px]">
          <p className="flex text-[18px] font-normal text-[#111827]">
            September 10, 2021
          </p>
          <p className="flex text-[48px] text-[#111827]">Kraków</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="16"
            cy="13"
            r="2"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex w-[414px] items-center justify-center">
        <img src="/sunny.png"></img>
      </div>
      <div className="flex flex-col h-fit items-start ">
        <p className="text-[144px] text-transparent  bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280] px-[30px]">
          17°
        </p>
        <p className="text-[24px] text-[#FF8E27] px-[40px]">Bright</p>
      </div>
      <div className="flex w-[414px]  center px-[48px] py-[54px] justify-around">
        <BiHomeAlt className="size-8" />
        <LuMapPin className="size-8" />
        <PiHeart className="size-8" />
        <FaRegUser className="size-8" />
      </div>
    </div>
  );
};
