import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Teams, User } from "../../../models";

type Data = {
  numberOfOrders: number;
  paidOrders: number; // isPad true
  notPaidOrders: number;
  numberOfClients: number; // role: client
  numberOfProducts: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect();

  // const numberOfOrders = await Order.count();
  // const paidOrders = await Order.find({ isPaid: true }).count();
  // const numberOfClients = await User.find({ role: 'client' }).count();
  // const numberOfProducts = await Teams.count();
  // const productsWithNoInventory = await Teams.find({ inStock: 0 }).count();
  // const lowInventory = await Teams.find({ inStock: { $lte: 10 } }).count();
  const [numberOfOrders, paidOrders, numberOfClients, numberOfProducts] =
    await Promise.all([
      User.find({ role: "client" }).count(),
      Teams.count(),
      Teams.find({ inStock: 0 }).count(),
      Teams.find({ inStock: { $lte: 10 } }).count(),
    ]);

  await db.disconnect();

  res.status(200).json({
    numberOfOrders,
    paidOrders,
    numberOfClients,
    numberOfProducts,

    notPaidOrders: numberOfOrders - paidOrders,
  });
}
