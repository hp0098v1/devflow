import Question from "@/components/forms/Question";

export default function AskQuestionPage() {
  return (
    <div>
      <h1 className="h1-bold text-dark-100-light-900">Ask a Question</h1>

      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
}
