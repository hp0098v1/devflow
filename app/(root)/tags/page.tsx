import { getAllTags } from "@/lib/actions/tag.action";
import { TagFilters } from "@/constants/filters";

import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import TagCard from "@/components/cards/TagCard";
import NoResult from "@/components/shared/NoResult";

export default async function TagsPage() {
  const result = await getAllTags({});

  return (
    <>
      <h1 className="h1-bold text-dark-100-light-900">Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconsPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amzing minds"
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <TagCard
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              description={tag.description}
              questionsCount={tag.questions.length}
            />
          ))
        ) : (
          <NoResult
            title="No Tag found"
            description="It's look like there are no tags found."
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </section>
    </>
  );
}
