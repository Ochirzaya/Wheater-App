"use client";
import { Card } from "./components/Card";
import Circle from "./components/Circle";
import Image from "next/image";
import { Sunny } from "./components/Sunny";
import { Input } from "./components/Input";

export default function Home() {
  return (
    <div className="w-screern flex h-screen relative">
      <Input />

      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[340px] border-2 border-[#FFF]"></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[540px] border-2 border-[#FFF] "></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[940px] border-2 border-[#FFF]"></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[1340px] border-2 border-[#FFF]"></div>
      <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] center size-[140px] border-2 border-[#FFF] "></div>

      <div className=" size-full bg-[#F3F4F6] flex items-center justify-center">
        <Sunny></Sunny>
      </div>
      <div className=" size-full bg-[#0F141E] flex items-center justify-center">
        <Card className="bg-[#ffffffbf]" />
      </div>
      <div className="absolute w-full h-full flex justify-around items-center"></div>
    </div>
  );
}
