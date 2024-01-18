"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.error(error);
  }
}