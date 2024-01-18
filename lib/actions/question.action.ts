"use server";

import { connectToDatabase } from "@/lib/mongoose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    // vlaidate body
    const { title, content, tags, author, path } = params;

    // create question and save to database
    const newQuestion = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag.name}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: newQuestion._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(newQuestion._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    /* TODO:  
        Craete an interaction record for the user's ask_question action
        Increment author's reputation by +5 for creating a question
    */

    // TODO: revalidate cache
  } catch (error) {}
}
