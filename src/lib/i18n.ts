export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      prices: "Prices",
      contact: "Contact",
      login: "Login",
      register: "Register",
      search: "Search services...",
    },
    services: {
      websites: "Website Templates",
      database: "Database Services",
      hosting: "Hosting Solutions",
      domains: "Domain Management",
      categories: {
        business: "Corporate & Business",
        ecommerce: "E-commerce",
        dashboard: "Dashboards",
        personal: "Personal Sites",
        education: "Education",
        entertainment: "Entertainment & Media",
      },
    },
    plans: {
      basic: {
        title: "Basic Plan",
        description: "Perfect for getting started",
        features: [
          "1 Custom Website",
          "Basic Technical Support",
          "Basic Database (Supabase)",
          "Standard Hosting",
          "Default Domain",
        ],
      },
      intermediate: {
        title: "Intermediate Plan",
        description: "Ideal for growing businesses",
        features: [
          "2 Custom Websites",
          "Priority Support",
          "Advanced Database Features",
          "Premium Hosting",
          "Custom Domain",
        ],
      },
      premium: {
        title: "Premium Plan",
        description: "For professional websites",
        features: [
          "3 Custom Websites",
          "Guaranteed Response Time",
          "Full Database Access",
          "Premium Hosting + CDN",
          "Multiple Custom Domains",
        ],
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      prices: "Precios",
      contact: "Contacto",
      login: "Iniciar Sesión",
      register: "Registrarse",
      search: "Buscar servicios...",
    },
    services: {
      websites: "Plantillas Web",
      database: "Servicios de Base de Datos",
      hosting: "Soluciones de Hosting",
      domains: "Gestión de Dominios",
      categories: {
        business: "Corporativo y Negocios",
        ecommerce: "Comercio Electrónico",
        dashboard: "Paneles de Control",
        personal: "Sitios Personales",
        education: "Educación",
        entertainment: "Entretenimiento y Medios",
      },
    },
    plans: {
      basic: {
        title: "Plan Básico",
        description: "Perfecto para comenzar",
        features: [
          "1 Sitio Web Personalizado",
          "Soporte Técnico Básico",
          "Base de Datos Básica (Supabase)",
          "Hosting Estándar",
          "Dominio por Defecto",
        ],
      },
      intermediate: {
        title: "Plan Intermedio",
        description: "Ideal para negocios en crecimiento",
        features: [
          "2 Sitios Web",
          "Soporte Prioritario",
          "Funciones Avanzadas de Base de Datos",
          "Hosting Premium",
          "Dominio Personalizado",
        ],
      },
      premium: {
        title: "Plan Premium",
        description: "Para sitios web profesionales",
        features: [
          "3 Sitios Web",
          "Tiempo de Respuesta Garantizado",
          "Acceso Completo a Base de Datos",
          "Hosting Premium + CDN",
          "Múltiples Dominios Personalizados",
        ],
      },
    },
  },
};

export type Language = "en" | "es";

export const useTranslation = (lang: Language = "es") => {
  return translations[lang];
};
