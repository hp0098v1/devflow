import Link from "next/link";

import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import HomeFilters from "@/components/home/HomeFilters";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: 1,
    title: "Question 1",
    tags: [
      { _id: "1", name: "Python" },
      { _id: "2", name: "Sql" },
    ],
    author: { _id: "author1", name: "John Doe", picture: "url_to_picture" },
    upvotes: 3400,
    views: 1000200,
    answers: [{ _id: "answer1" }, { _id: "answer2" }], // Replace with actual answer properties
    createdAt: new Date("2023-09-01T00:00:00"),
  },
  {
    _id: 2,
    title: "Question 2",
    tags: [
      { _id: "3", name: "JavaScript" },
      { _id: "4", name: "TypeScript" },
    ],
    author: { _id: "author2", name: "Jane Doe", picture: "url_to_picture" },
    upvotes: 12,
    views: 120,
    answers: [{ _id: "answer3" }, { _id: "answer4" }, { _id: "answer5" }], // Replace with actual answer properties
    createdAt: new Date("2023-09-01T00:00:00"),
  },
];

export default function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark-100-light-900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-md px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconsPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing other learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
