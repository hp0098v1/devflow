"use server";

import { connectToDatabase } from "@/lib/mongoose";

export async function createQuestion(params: any) {
  try {
    /* TODO:
      Connet to DB
    */

    connectToDatabase();
  } catch (error) {}
}
