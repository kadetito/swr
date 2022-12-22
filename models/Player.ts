import mongoose, { Schema, model, Model } from "mongoose";
import { IPlayers } from "../interfaces";

const playerSchema = new Schema(
  {
    name: { type: String, required: true, default: "" },
    birthday: { type: String, required: true, default: "" },
    position: { type: String, required: true, default: "" },
    position_abbreviate: { type: String, required: true, default: "" },
    slug: { type: String, required: true, unique: true },
    nationality: { type: String, default: "" },
    dorsal: { type: String, required: true, default: "" },
    club: { type: String, required: true, default: "" },
    image: { type: String, required: true, default: "" },
  },
  {
    timestamps: true,
  }
);

const Player: Model<IPlayers> =
  mongoose.models.Player || model("Player", playerSchema);

export default Player;
