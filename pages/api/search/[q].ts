import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { ITeams } from "../../../interfaces";
import { Teams } from "../../../models";

type Data = { message: string } | ITeams[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchTeams(req, res);

    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

const searchTeams = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res.status(400).json({
      message: "Debe de especificar el query de búsqueda",
    });
  }

  q = q.toString().toLowerCase();
  console.log(q);
  await db.connect();
  const team = await Teams.find({
    $text: { $search: q },
  }).lean();

  await db.disconnect();

  return res.status(200).json(team);
};
