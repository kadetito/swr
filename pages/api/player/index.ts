import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Teams } from "../../../models";
import { ITeams } from "../../../interfaces";

type Data = { message: string } | ITeams[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getTeams(req, res);

    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

const getTeams = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const teams = await Teams.find().select("-_id").lean();

  await db.disconnect();

  return res.status(200).json(teams);
};
