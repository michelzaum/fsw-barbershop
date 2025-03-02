import { BarbershopItem } from "../_components/barbershop-item";
import { Header } from "../_components/header";
import Search from "../_components/search";
import {
  BarberShopsPageProps,
  getBarbershopsByTitleOrService,
} from "../_data/get-barbershops-by-title-or-service";

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
  const barbershops = await getBarbershopsByTitleOrService({ searchParams });

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Resultados para{" "}
          {(await searchParams).title || (await searchParams).service}
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
