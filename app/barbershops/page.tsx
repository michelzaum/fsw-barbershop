import { BarbershopItem } from "../_components/barbershop-item";
import { Header } from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface BarberShopsPageProps {
  searchParams: Promise<{
    title?: string;
    service?: string;
  }>;
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
  const title = (await searchParams).title;
  const service = (await searchParams).service;

  const barbershops = await db.barbershop.findMany({
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

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Resultados para {title || service}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberShopsPage;
