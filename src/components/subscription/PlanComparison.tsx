import React from "react";
import PlanCard from "./PlanCard";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  title: string;
  price: number;
  description: string;
  features: PlanFeature[];
  isPopular: boolean;
}

interface PlanComparisonProps {
  plans?: Plan[];
  onPlanSelect?: (plan: Plan) => void;
}

const defaultPlans: Plan[] = [
  {
    title: "Plan Básico",
    price: 30,
    description: "Perfecto para comenzar",
    features: [
      { name: "1 sitio web personalizado", included: true },
      { name: "Soporte técnico básico", included: true },
      { name: "Base de datos básica", included: true },
      { name: "Hosting estándar", included: true },
      { name: "Dominio por defecto", included: true },
    ],
    isPopular: false,
  },
  {
    title: "Plan Intermedio",
    price: 70,
    description: "Ideal para negocios",
    features: [
      { name: "2 sitios web", included: true },
      { name: "Soporte prioritario", included: true },
      { name: "Base de datos avanzada", included: true },
      { name: "Hosting premium", included: true },
      { name: "Dominio personalizado", included: true },
    ],
    isPopular: true,
  },
  {
    title: "Plan Premium",
    price: 120,
    description: "Para profesionales",
    features: [
      { name: "3 sitios web", included: true },
      { name: "Soporte 24/7", included: true },
      { name: "Base de datos ilimitada", included: true },
      { name: "Hosting premium + CDN", included: true },
      { name: "Múltiples dominios", included: true },
    ],
    isPopular: false,
  },
  {
    title: "Plan Personalizado",
    price: 0,
    description: "A tu medida",
    features: [
      { name: "Sitios web ilimitados", included: true },
      { name: "Soporte dedicado", included: true },
      { name: "Infraestructura a medida", included: true },
      { name: "Hosting empresarial", included: true },
      { name: "Dominios ilimitados", included: true },
    ],
    isPopular: false,
  },
];

const PlanComparison = ({
  plans = defaultPlans,
  onPlanSelect = () => {},
}: PlanComparisonProps) => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/34900123456?text=Hola,%20me%20interesa%20un%20plan%20personalizado",
      "_blank",
    );
  };

  return (
    <div className="w-full bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight custom-text mb-4">
            Elige tu Plan
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Selecciona el plan perfecto para tus necesidades
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {plans.map((plan, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <PlanCard
                    title={plan.title}
                    price={plan.price}
                    description={plan.description}
                    features={plan.features}
                    isPopular={plan.isPopular}
                    onSelect={
                      plan.title === "Plan Personalizado"
                        ? handleWhatsAppClick
                        : () => onPlanSelect(plan)
                    }
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlanComparison;
