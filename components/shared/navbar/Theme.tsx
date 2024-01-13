"use client";
import Image from "next/image";

import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { THEMES } from "@/constants";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none ">
      <MenubarMenu>
        <MenubarTrigger className="[state=open]:bg-light-900 dark:[state=open]:bg-dark-200 focus:bg-light-900 dark:focus:bg-dark-200">
          {theme === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="bg-light-900-dark-400 absolute right-[-3rem] z-50 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400">
          {THEMES.map((item) => (
            <MenubarItem
              className="flex cursor-pointer items-center gap-4 p-2 dark:focus:bg-dark-400"
              onClick={() => {
                setTheme(item.value);

                if (item.value === "system") {
                  localStorage.removeItem("theme");
                } else {
                  localStorage.setItem("theme", item.value);
                }
              }}
              key={item.value}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${theme === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  theme === item.value
                    ? "text-primary-500"
                    : "text-dark-100-light-900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
