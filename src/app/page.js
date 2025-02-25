"use client";
import Circle from "./components/Circle";

export default function Home() {
  return (
    <div className="w-screern flex h-screen relative">
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[340px] border-2 border-[#FFF]"></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[540px] border-2 border-[#FFF] "></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[940px] border-2 border-[#FFF]"></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[1340px] border-2 border-[#FFF]"></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[140px] border-2 border-[#FFF] "></div>
      <div className=" size-full bg-[#F3F4F6]"></div>
      <div className=" size-full bg-[#0F141E]"></div>
    </div>
  );
}
