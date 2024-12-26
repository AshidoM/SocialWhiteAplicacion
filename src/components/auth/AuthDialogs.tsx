import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useStore } from "@/lib/store";
import { useTranslation } from "@/lib/i18n";

export const LoginDialog = () => {
  const { language } = useStore();
  const t = useTranslation(language);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">{t.nav.login}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.nav.login}</DialogTitle>
          <DialogDescription>
            Ingresa tus credenciales para acceder a tu cuenta.
          </DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export const RegisterDialog = () => {
  const { language } = useStore();
  const t = useTranslation(language);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t.nav.register}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.nav.register}</DialogTitle>
          <DialogDescription>
            Crea una cuenta para acceder a todos nuestros servicios.
          </DialogDescription>
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
};
