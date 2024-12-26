import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Globe, Layout } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "website" | "database" | "hosting" | "domain";
  onSelect?: () => void;
}

const ServiceCard = ({
  title = "Plantillas Web",
  description = "Crea sitios web hermosos con nuestras plantillas prediseñadas",
  icon = "website",
  onSelect = () => {},
}: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "website":
        return <Layout className="w-8 h-8" />;
      case "database":
        return <Database className="w-8 h-8" />;
      case "hosting":
        return <Globe className="w-8 h-8" />;
      case "domain":
        return <Globe className="w-8 h-8" />;
      default:
        return <Layout className="w-8 h-8" />;
    }
  };

  return (
    <Card className="w-[280px] h-[320px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="p-3 bg-primary/10 w-fit rounded-lg mb-2">
          {getIcon()}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Característica 1
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Característica 2
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Característica 3
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={onSelect} className="w-full" variant="default">
          Saber Más
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
