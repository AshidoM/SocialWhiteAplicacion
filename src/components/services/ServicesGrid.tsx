import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useStore } from "@/lib/store";
import { useTranslation } from "@/lib/i18n";

interface ServicesGridProps {
  services?: Array<{
    title: string;
    description: string;
    icon: "website" | "database" | "hosting" | "domain";
    onSelect?: () => void;
  }>;
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  const navigate = useNavigate();
  const { language } = useStore();
  const t = useTranslation(language);

  const defaultServices = [
    {
      title: t.services.websites,
      description:
        "Crea sitios web hermosos con nuestras plantillas prediseñadas",
      icon: "website" as const,
      onSelect: () => navigate("/servicios/plantillas"),
    },
    {
      title: t.services.database,
      description:
        "Soluciones potentes de base de datos con integración Supabase",
      icon: "database" as const,
      onSelect: () => navigate("/servicios/base-de-datos"),
    },
    {
      title: t.services.hosting,
      description: "Hosting rápido y confiable con Vercel y Netlify",
      icon: "hosting" as const,
      onSelect: () => navigate("/servicios/hosting"),
    },
    {
      title: t.services.domains,
      description: "Registra y administra tus dominios personalizados",
      icon: "domain" as const,
      onSelect: () => navigate("/servicios/dominios"),
    },
  ];

  const currentServices = services || defaultServices;

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-background p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {currentServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            onSelect={service.onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
