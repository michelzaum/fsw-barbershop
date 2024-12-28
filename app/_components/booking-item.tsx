import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TODO: Receive booking information as props
export const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
              </Avatar>
              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>

          <div className="border-solid- flex flex-col items-center justify-center border-l-2 px-5">
            <p className="text-sm">Dezembro</p>
            <p className="text-2xl">27</p>
            <p className="text-sm">12:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
