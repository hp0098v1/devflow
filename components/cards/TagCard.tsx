import Link from "next/link";

type TagCardPropsType = {
  _id: string;
  name: string;
  description: string;
  questionsCount: number;
};

const TagCard = ({
  _id,
  name,
  description,
  questionsCount,
}: TagCardPropsType) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="bg-light-900-dark-200 border-light-800-dark-300 shadow-light-100-dark-none flex w-full flex-col items-start gap-4 rounded-lg px-8 py-10 max-sm:w-full sm:w-[260px]"
    >
      <h3 className="p-semibold bg-light-800-dark-400 text-dark-300-light-900 line-clamp-1 rounded-md px-5 py-2 capitalize">
        {name}
      </h3>
      <p className="small-regular text-dark-500-light-700">{description}</p>

      <div className="flex items-center gap-2">
        <span className="body-semibold primary-text-gradient">
          {questionsCount}+
        </span>
        <span className="small-medium text-dark-500-light-500">Questions</span>
      </div>
    </Link>
  );
};

export default TagCard;
