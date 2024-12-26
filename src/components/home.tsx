import React from "react";
import ServicesGrid from "./services/ServicesGrid";
import PlanComparison from "./subscription/PlanComparison";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Construye tu Presencia Web
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Crea, aloja y gestiona tus sitios web con nuestra plataforma
            integral de servicios web
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4" id="servicios">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para construir y mantener tu presencia en
            línea
          </p>
        </div>
        <ServicesGrid />
      </section>

      {/* Plans Section */}
      <section className="bg-secondary/10" id="planes">
        <PlanComparison />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            ¿Por qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-3">Fácil de Usar</h3>
              <p className="text-muted-foreground">
                Interfaz intuitiva diseñada para usuarios de todos los niveles
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-3">Soporte Confiable</h3>
              <p className="text-muted-foreground">
                Soporte al cliente 24/7 para ayudarte en cada paso
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-3">
                Soluciones Escalables
              </h3>
              <p className="text-muted-foreground">
                Haz crecer tu presencia en línea con nuestra plataforma flexible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Comenzar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de empresas que ya utilizan nuestra plataforma
          </p>
          <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
            Comenzar Prueba Gratuita
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
