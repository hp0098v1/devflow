import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type NoResultProps = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
};

const NoResult = ({ title, description, link, linkTitle }: NoResultProps) => {
  return (
    <div className="flex-center mt-10 w-full flex-col">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:block"
      />

      <h2 className="h2-bold text-dark-200-light-900 mt-8">{title}</h2>
      <p className="body-regular text-dark-500-light-700 my-4 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <Button className="p-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 ">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
