import { Input } from "@/components/ui/input";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="bg-light-800-dark-gradient relative flex min-h-[56px] items-center gap-2 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />

        <Input
          type="text"
          placeholder="Search globaly"
          className="no-focus placeholder text-dark-400-light-700 border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
