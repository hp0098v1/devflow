import Image from "next/image";
import Link from "next/link";

import { getTopInteractedTags } from "@/lib/actions/tag.action";

import RenderTag from "@/components/shared/RenderTag";
import { Badge } from "@/components/ui/badge";

type UserCardPropsType = {
  _id: string;
  clerkId: string;
  name: string;
  username: string;
  picture: string;
};

const UserCard = async ({
  _id,
  clerkId,
  name,
  username,
  picture,
}: UserCardPropsType) => {
  const tags = await getTopInteractedTags({ userId: _id });

  return (
    <Link href={`/profile/${clerkId}`}>
      <article className="flex-center bg-light-900-dark-200 border-light-800-dark-300 shadow-light-100-dark-none flex-col gap-5 rounded-lg p-8 max-sm:w-full">
        <Image
          src={picture}
          alt="User image"
          width={100}
          height={100}
          className="rounded-full"
        />

        <h3 className="h3-bold text-dark-200-light-900 line-clamp-1">{name}</h3>
        <p className="p-regular text-dark-500-light-500 line-clamp-1">
          @{username}
        </p>

        <div className="flex-center gap-2">
          {tags.length > 0 ? (
            tags.map((tag) => <RenderTag key={tag} _id={tag} name={tag} />)
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
