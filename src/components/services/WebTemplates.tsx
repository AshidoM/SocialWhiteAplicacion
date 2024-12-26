import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle } from "lucide-react";

const categories = [
  {
    id: "business",
    name: "Corporativo y Negocios",
    templates: [
      {
        id: 1,
        name: "Empresa Moderna",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        technologies: {
          frontend: "React + Vite",
          backend: "Supabase",
          styles: "Tailwind CSS",
          ui: "Material UI",
          database: "PostgreSQL",
        },
      },
      {
        id: 2,
        name: "Consultora Pro",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        technologies: {
          frontend: "HTML5",
          backend: "PHP",
          styles: "CSS3",
          ui: "Bootstrap",
          database: "MySQL",
        },
      },
    ],
  },
  {
    id: "ecommerce",
    name: "Comercio Electrónico",
    templates: [
      {
        id: 3,
        name: "Tienda Moderna",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
        technologies: {
          frontend: "Next.js",
          backend: "Node.js",
          styles: "Sass",
          ui: "Chakra UI",
          database: "MongoDB",
        },
      },
      {
        id: 4,
        name: "Marketplace Plus",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        technologies: {
          frontend: "Vue.js",
          backend: "Express.js",
          styles: "CSS Modules",
          ui: "Vuetify",
          database: "Redis",
        },
      },
    ],
  },
  {
    id: "dashboard",
    name: "Paneles de Control",
    templates: [
      {
        id: 5,
        name: "Admin Pro",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        technologies: {
          frontend: "Angular",
          backend: "Django",
          styles: "SCSS",
          ui: "Angular Material",
          database: "PostgreSQL",
        },
      },
      {
        id: 6,
        name: "Analytics Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        technologies: {
          frontend: "React",
          backend: "FastAPI",
          styles: "Styled Components",
          ui: "Ant Design",
          database: "TimescaleDB",
        },
      },
    ],
  },
  {
    id: "personal",
    name: "Sitios Personales",
    templates: [
      {
        id: 7,
        name: "Portfolio Creativo",
        image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
        technologies: {
          frontend: "Svelte",
          backend: "Netlify Functions",
          styles: "TailwindCSS",
          ui: "Skeleton",
          database: "Supabase",
        },
      },
      {
        id: 8,
        name: "Blog Personal",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        technologies: {
          frontend: "Gatsby",
          backend: "GraphQL",
          styles: "Styled Components",
          ui: "Theme UI",
          database: "Contentful",
        },
      },
    ],
  },
];

const WebTemplates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter(
    (category) => !selectedCategory || category.id === selectedCategory,
  );

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/34900123456?text=Hola,%20me%20interesa%20un%20sitio%20web%20personalizado",
      "_blank",
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar plantillas..."
            className="w-full pl-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() =>
              setSelectedCategory(
                category.id === selectedCategory ? null : category.id,
              )
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCategories.map((category) =>
          category.templates
            .filter((template) =>
              template.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((template) => (
              <Card
                key={template.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  {template.technologies && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">
                        Tecnologías:
                      </h4>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">Frontend:</span>{" "}
                          {template.technologies.frontend}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">Backend:</span>{" "}
                          {template.technologies.backend}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">Estilos:</span>{" "}
                          {template.technologies.styles}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">Librería UI:</span>{" "}
                          {template.technologies.ui}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">Base de Datos:</span>{" "}
                          {template.technologies.database}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <Button variant="outline">Vista Previa</Button>
                    {category.id === "personal" && (
                      <Button
                        className="bg-green-500 hover:bg-green-600"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Cotizar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )),
        )}
      </div>
    </div>
  );
};

export default WebTemplates;
