"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="border-light-800-dark-300 bg-light-900-dark-200 custom-scrollbar sticky left-0 top-0 flex h-screen flex-col items-start justify-between gap-8 overflow-y-auto border-r px-6 pb-8 pt-36 max-sm:hidden lg:w-[266px]">
      <div className="flex w-full flex-col items-start gap-4">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark-300-light-900"
              } flex-center w-full gap-4 p-4 lg:justify-start`}
              href={item.route}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />

              <p
                className={`max-lg:hidden ${
                  isActive ? "base-bold" : "base-medium"
                }`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex w-full flex-col gap-3">
          <Link href="/sign-in">
            <Button className="p-semibold btn-secondary min-h-[40px] w-full rounded-lg px-5 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="SignIn"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="p-semibold text-dark-400-light-900 btn-tertiary border-light-700-dark-400 min-h-[40px] w-full rounded-lg px-5 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="Sign Up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className=" max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
};

export default LeftSidebar;
