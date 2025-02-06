import Image from "next/image";
import { signIn } from "next-auth/react";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

const SignInDialog = () => {
  const handleLoginWithGoogleClick = async () => await signIn("google");

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          alt="Fazer login com o Google"
          height={18}
          width={18}
        />
        Google
      </Button>
    </>
  );
};

export default SignInDialog;
