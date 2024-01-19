"use server";

// import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import {
  GetAllTagsParamsType,
  GetTopInteractedTagsParamsType,
} from "@/lib/actions/shared.types";
import { connectToDatabase } from "@/lib/mongoose";

export async function getAllTags(params: GetAllTagsParamsType) {
  try {
    connectToDatabase();

    // const { filter, searchQuery, page = 1, pageSize= 10 } = params;

    // const tags = await Tag.find({}).sort({ createdOn: -1 });

    return {
      tags: [
        {
          _id: "123",
          name: "JavaScript",
          description:
            "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
          questions: ["1", "2", "3", "4"],
        },
        {
          _id: "456",
          name: "Typescript",
          description:
            "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
          questions: ["1", "2", "3"],
        },
      ],
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTopInteractedTags(
  params: GetTopInteractedTagsParamsType
) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // TODO: find interaction for the user and group by tags...
    // Interaction

    return ["HTML", "CSS", "JavaScript"];
  } catch (error) {
    console.error(error);
    throw error;
  }
}
