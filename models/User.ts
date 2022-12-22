import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "../interfaces";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ["admin", "client", "super-user", "SEO"],
        message: "{VALUE} no es un role válido",
        default: "client",
        required: true,
      },
    },

    number_col: { type: String, required: true, default: "" },
    images: [{ type: String }],
    slug: { type: String, required: true, unique: true },
    birthDate: { type: String, default: "" },
    expertise: { type: String, required: true, default: "" },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;
