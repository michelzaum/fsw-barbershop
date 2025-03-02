"use server";

import { db } from "../_lib/prisma";

export const getPopularBarbershops = async () => {
  // TODO: Implement the correct logic to get the popular barbershops.
  return db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
};
