import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const UserPlan = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Plan Actual</CardTitle>
          <CardDescription>Detalles de tu suscripción</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">Plan Básico</h3>
              <p className="text-muted-foreground">$30/mes</p>
            </div>
            <Button variant="outline">Cambiar Plan</Button>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Método de Pago</h4>
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6" />
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expira 12/24</p>
              </div>
              <Button variant="ghost" size="sm">
                Editar
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Próximo Pago</h4>
            <p className="text-muted-foreground">
              Tu próximo pago de $30 será el 1 de enero de 2024
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPlan;
