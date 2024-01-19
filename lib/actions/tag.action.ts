"use server";

import User from "@/database/user.model";
import { GetTopInteractedTagsParamsType } from "@/lib/actions/shared.types";
import { connectToDatabase } from "@/lib/mongoose";

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
