import RenderTag from "@/components/shared/RenderTag";
import Image from "next/image";
import Link from "next/link";

const hotQuestions = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: 2,
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: 3,
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: 4,
    title: "Async/Await Function Not Handling Errors Properly",
  },
];

const popularTags = [
  { _id: 1, name: "Next js", totalQuestions: 40 },
  { _id: 2, name: "Javascript", totalQuestions: 30 },
  { _id: 3, name: "Typescript", totalQuestions: 20 },
  { _id: 4, name: "React", totalQuestions: 10 },
];

const RightSidebar = () => {
  return (
    <aside className="border-light-800-dark-300 bg-light-900-dark-200 custom-scrollbar sticky right-0 top-0 flex h-screen w-[330px] flex-col gap-16 overflow-y-auto border-l px-6 pb-8 pt-36 max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark-200-light-900">Top Questuins</h3>
        <div className="mt-7 flex flex-col gap-8">
          {hotQuestions.map((question) => (
            <Link
              className="flex-between cursor-pointer gap-7"
              href={`/questions/${question._id}`}
              key={question._id}
            >
              <p className="body-medium text-dark-500-light-700">
                {question.title}
              </p>

              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="h3-bold text-dark-200-light-900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
