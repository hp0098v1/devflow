import Link from "next/link";

import { getAllUsers } from "@/lib/actions/user.action";
import { UserFilters } from "@/constants/filters";

import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import UserCard from "@/components/cards/UserCard";

export default async function CommunityPage() {
  const result = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark-100-light-900">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconsPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amzing minds"
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => (
            <UserCard
              key={user.clerkId}
              _id={user._id}
              clerkId={user.clerkId}
              name={user.name}
              username={user.username}
              picture={user.picture}
            />
          ))
        ) : (
          <div className="p-regular text-dark-200-light-800 mx-auto max-w-4xl text-center">
            <p>No users yer</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Join to be first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
