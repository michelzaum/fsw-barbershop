"use server";

import { db } from "../_lib/prisma";

export const getBarberShops = async () => db.barbershop.findMany({});
