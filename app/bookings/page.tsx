import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../_components/header";
import { authOptions } from "../_lib/auth";
import { BookingItem } from "../_components/booking-item";
import { Button } from "../_components/ui/button";
import { getConfirmedBookings } from "../_data/get-confirmed-bookings";
import { getConcludedBookings } from "../_data/get-concluded-bookings";

const Bookings = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    // TODO: Show log in pop-up
    return notFound();
  }

  const confirmedBookings = await getConfirmedBookings();
  const concludedBookings = await getConcludedBookings();

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <div className="flex w-full flex-col gap-6">
            <p className="text-gray-400">
              Você não tem agendamentos no momento.
            </p>
            <Button variant="secondary">
              <Link href="/" className="w-full">
                Voltar para o início
              </Link>
            </Button>
          </div>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            {concludedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Bookings;
