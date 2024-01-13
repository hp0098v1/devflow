import Image from "next/image";
import Link from "next/link";

import { SignedIn, UserButton } from "@clerk/nextjs";

import Theme from "@/components/shared/navbar/Theme";
import MobileNav from "@/components/shared/navbar/MobileNav";
import GlobalSearch from "@/components/shared/search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between bg-light-900-dark-200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={"/assets/images/site-logo.svg"}
          alt="DevFlow"
          width={23}
          height={23}
        />

        <p className="h2-bold text-dark-100-light-900 font-spaceGrotesk max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      {/* Global Search */}
      <GlobalSearch />

      <div className="flex-between gap-5">
        {/* Theme */}
        <Theme />

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        {/* Mobile Navbar */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
