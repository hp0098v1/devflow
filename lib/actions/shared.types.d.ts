import { Schema } from "mongoose";
import { UserType } from "@/database/user.model";

/* -------------------------------------------------------------------------- */
/*                               Question Params                              */
/* -------------------------------------------------------------------------- */
export type GetQuestionsParamsType = {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
};

export type CreateQuestionParamsType = {
  title: string;
  content: string;
  tags: string[];
  author: Schema.Types.ObjectId | UserType;
  path: string;
};

/* -------------------------------------------------------------------------- */
/*                               User Params                                  */
/* -------------------------------------------------------------------------- */
export type CreateUserParamsType = {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
};

export type UpdateUserParamsType = {
  clerkId: string;
  updateData: Partial<UserType>;
  path: string;
};

export type DeleteUserParamsType = {
  clerkId: string;
};
