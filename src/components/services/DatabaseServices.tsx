import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Cloud, Link2, AlertCircle } from "lucide-react";

const services = [
  {
    id: "create",
    title: "Creación de Base de Datos",
    description: "Configura una nueva base de datos con Supabase",
    icon: Database,
    features: [
      "Configuración inicial optimizada",
      "Esquemas predefinidos por industria",
      "Migración de datos existentes",
      "Documentación completa",
    ],
  },
  {
    id: "migrate",
    title: "Migración a la Nube",
    description: "Traslada tu base de datos actual a la nube de forma segura",
    icon: Cloud,
    features: [
      "Análisis de compatibilidad",
      "Migración sin tiempo de inactividad",
      "Verificación de integridad",
      "Optimización post-migración",
    ],
  },
  {
    id: "connect",
    title: "Conexión de Base de Datos",
    description: "Integra tu base de datos con aplicaciones existentes",
    icon: Link2,
    features: [
      "Configuración de API",
      "Autenticación segura",
      "Optimización de consultas",
      "Monitoreo de rendimiento",
    ],
  },
  {
    id: "other",
    title: "Otros Servicios",
    description: "Soluciones personalizadas para necesidades específicas",
    icon: AlertCircle,
    features: [
      "Bases de datos NoSQL",
      "Sistemas distribuidos",
      "Replicación y backup",
      "Consultoría especializada",
    ],
  },
];

const DatabaseServices = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Servicios de Base de Datos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Soluciones profesionales de base de datos con Supabase. Diseñadas para
          escalar con tu negocio y mantener tus datos seguros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  {service.id === "other"
                    ? "Solicitar Información"
                    : "Comenzar"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DatabaseServices;
