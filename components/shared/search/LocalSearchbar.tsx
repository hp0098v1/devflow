"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

type LocalSearchbarPropsType = {
  route: string;
  iconsPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};

const LocalSearchbar = ({
  route,
  iconsPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarPropsType) => {
  return (
    <div
      className={`bg-light-800-dark-gradient flex min-h-[56px] grow items-center gap-4 rounded-lg px-4 ${otherClasses}`}
    >
      {iconsPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="p-regular no-focus placeholder text-dark-400-light-700 border-none bg-transparent shadow-none outline-none"
      />

      {iconsPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
