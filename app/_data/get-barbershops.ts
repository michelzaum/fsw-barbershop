import { db } from "../_lib/prisma";

export interface BarberShopsPageProps {
  searchParams: Promise<{
    title?: string;
    service?: string;
  }>;
}

export const getBarbershops = async ({
  searchParams,
}: BarberShopsPageProps) => {
  const title = (await searchParams).title;
  const service = (await searchParams).service;

  return db.barbershop.findMany({
    where: {
      OR: [
        title
          ? {
              name: {
                contains: title,
                mode: "insensitive",
              },
            }
          : {},
        service
          ? {
              services: {
                some: {
                  name: {
                    contains: service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  });
};
