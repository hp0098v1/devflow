import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";

export default async function AskQuestionPage() {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId: "123456" });

  console.log(mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark-100-light-900">Ask a Question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
}
