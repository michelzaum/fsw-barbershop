import Image from "next/image";
import Link from "next/link";
import { Header } from "./_components/header";
import { Button } from "./_components/ui/button";
import { db } from "./_lib/prisma";
import { BarbershopItem } from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/quickSearch";
import { BookingItem } from "./_components/booking-item";
import Search from "./_components/search";
import { Sheet, SheetClose } from "./_components/ui/sheet";

export default async function Home() {
  const barbsershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Michel!</h2>
        <p>Sexta-feira, 27 de fevereiro.</p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Sheet key={option.title}>
              <SheetClose asChild>
                <Button className="gap-2 px-6" asChild variant="secondary">
                  <Link href={`/barbershops?service=${option.title}`}>
                    <Image
                      src={option.imageUrl}
                      width={16}
                      height={16}
                      alt={option.title}
                    />
                    <span>{option.title}</span>
                  </Link>
                </Button>
              </SheetClose>
            </Sheet>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbsershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
