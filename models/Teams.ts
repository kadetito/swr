import mongoose, { Schema, model, Model } from "mongoose";
import { ITeams } from "../interfaces";
import { ILeague } from "../interfaces/teams";

const teamSchema = new Schema(
  {
    team_name: { type: String, required: true, default: "" },
    formal_name: { type: String, required: true, default: "" },
    location_city: { type: String, required: true, default: "" },
    year_foundation: { type: String, required: true, default: "" },
    shield_image: { type: String, required: true, default: "" },
    actually_squad_image: { type: String, required: true, default: "" },
    first_wear_image: { type: String, default: "" },
    second_wear_image: { type: String, default: "" },
    league: { identify: { type: String }, name: { type: String } },
    stadium: {
      name: { type: String },
      capacity: { type: String },
      address: { type: String },
      image: { type: String },
    },
    slug: { type: String, required: true, unique: true },

    technical_staff: [
      {
        _id: { type: String },
        name: { type: String },
        appointment: { type: String },
        image: { type: String },
      },
    ],
    players: [
      {
        name: { type: String },
        slug: { type: String },
        birthday: { type: String },
        position: { type: String },
        position_abbreviate: { type: String },
        nationality: { type: String },
        dorsal: { type: String },
        club: { type: String },
        image: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

teamSchema.index({ "$**": "text" });

const Team: Model<ITeams> = mongoose.models.Team || model("Team", teamSchema);

export default Team;
