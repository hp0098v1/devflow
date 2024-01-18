import { Document, Schema, model, models } from "mongoose";

type UserType = {
  clerkId: string;
  name: string;
  usernames: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved?: Schema.Types.ObjectId[];
  joinedAt: Date;
} & Document;

const userSchema = new Schema<UserType>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  usernames: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model<UserType>("User", userSchema);

export default User;
