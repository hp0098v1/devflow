import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type RenderTagePropsType = {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount?: boolean;
};

const RenderTag = ({
  showCount = false,
  _id,
  name,
  totalQuestions,
}: RenderTagePropsType) => {
  return (
    <Link className="flex-between gap-2" href={`/tags/${_id}`}>
      <Badge className="subtitle-medium bg-light-800-dark-300 text-light-400-light-500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark-500-light-700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
