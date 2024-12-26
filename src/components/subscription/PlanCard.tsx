import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanCardProps {
  title?: string;
  price?: number;
  description?: string;
  features?: PlanFeature[];
  isPopular?: boolean;
  onSelect?: () => void;
}

const defaultFeatures: PlanFeature[] = [
  { name: "Creación de sitio web personalizado", included: true },
  { name: "Soporte técnico básico", included: true },
  { name: "Base de datos Supabase", included: true },
  { name: "Hosting por defecto", included: true },
  { name: "Dominio por defecto", included: true },
];

const PlanCard = ({
  title = "Plan Básico",
  price = 30,
  description = "Perfecto para comenzar",
  features = defaultFeatures,
  isPopular = false,
  onSelect = () => console.log("Plan seleccionado"),
}: PlanCardProps) => {
  return (
    <Card
      className={`w-[280px] h-[420px] bg-card hover:scale-105 transition-transform ${isPopular ? "border-custom custom-border shadow-lg" : ""}`}
    >
      <CardHeader className="space-y-1">
        {isPopular && (
          <div className="px-2 py-0.5 text-xs font-semibold text-white custom-bg rounded-full w-fit mb-1">
            Más Popular
          </div>
        )}
        <CardTitle className="text-lg font-bold custom-text">{title}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          {description}
        </CardDescription>
        <div className="mt-1">
          {price > 0 ? (
            <>
              <span className="text-2xl font-bold custom-text">${price}</span>
              <span className="text-sm text-muted-foreground">/mes</span>
            </>
          ) : (
            <span className="text-lg font-semibold custom-text">
              Consultar precio
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 custom-text" />
              <span className="text-xs leading-tight">{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className={`w-full ${isPopular ? "custom-bg hover:opacity-90" : "border-custom custom-border custom-text hover:custom-bg hover:text-white"}`}
          variant={isPopular ? "default" : "outline"}
          onClick={onSelect}
        >
          {price > 0 ? "Comenzar Ahora" : "Solicitar Información"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
