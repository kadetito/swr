import { db } from ".";
import { Teams } from "../models";
import { ITeams } from "../interfaces";

import { IPlayers } from "../interfaces/teams";
import Player from "../models/Player";

export const getTeamsBySlug = async (slug: string): Promise<ITeams | null> => {
  await db.connect();

  const caso = await Teams.findOne({ slug }).lean();
  await db.disconnect();

  if (!caso) {
    return null;
  }

  // caso.images = caso.images.map((image) => {
  //   return image.includes("http")
  //     ? image
  //     : `${process.env.HOST_NAME}cases/${image}`;
  // });

  return JSON.parse(JSON.stringify(caso));
};

export const getPlayerBySlug = async (slug: string): Promise<ITeams | null> => {
  await db.connect();
  const player = await Teams.aggregate([
    {
      $unwind: "$players",
    },
    {
      $match: {
        "players.slug": slug,
      },
    },
  ]);

  await db.disconnect();
  if (!player) {
    return null;
  }

  return JSON.parse(JSON.stringify(player));
};

interface TeamsSlug {
  slug: string;
}

export const getAllTeamsSlugs = async (): Promise<TeamsSlug[]> => {
  await db.connect();
  const slugs = await Teams.find().select("slug -_id").lean();
  await db.disconnect();
  return slugs;
};

export const getAllPlayersSlugs = async (): Promise<TeamsSlug[]> => {
  await db.connect();
  const slugs = await Teams.find().select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};

export const getTeamsByTerm = async (term: string): Promise<ITeams[]> => {
  term = term.toString().toLowerCase();

  await db.connect();
  const teams = await Teams.find({
    $text: { $search: term },
  }).lean();

  await db.disconnect();
  return JSON.parse(JSON.stringify(teams));
};

export const getAllCasess = async (): Promise<ITeams[]> => {
  await db.connect();
  const casos = await Teams.find().sort({ dateReview: -1 }).lean();
  await db.disconnect();

  // const updatedCasess = casos.map((caso) => {
  //   caso.images = caso.images.map((image) => {
  //     return image.includes("http")
  //       ? image
  //       : `${process.env.HOST_NAME}cases/${image}`;
  //   });
  //   return caso;
  // });

  return JSON.parse(JSON.stringify(casos));
};
