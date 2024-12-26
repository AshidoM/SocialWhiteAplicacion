import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Search, Menu, Globe, User } from "lucide-react";
import { LoginDialog, RegisterDialog } from "@/components/auth/AuthDialogs";
import { useStore } from "@/lib/store";
import { useTranslation } from "@/lib/i18n";

const Header = () => {
  const navigate = useNavigate();
  const { language, setLanguage, isLoggedIn, user, logout } = useStore();
  const t = useTranslation(language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/servicios" },
    { label: t.nav.prices, href: "/precios" },
    { label: t.nav.contact, href: "/contacto" },
  ];

  const serviceItems = [
    { label: t.services.websites, href: "/servicios/plantillas" },
    { label: t.services.database, href: "/servicios/base-de-datos" },
    { label: t.services.hosting, href: "/servicios/hosting" },
    { label: t.services.domains, href: "/servicios/dominios" },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full h-[72px] bg-background border-b z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 bg-primary rounded-lg" />
          <span className="text-2xl font-bold text-primary">SocialWhite</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.label === t.nav.services ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-4 w-[400px]">
                          {serviceItems.map((service, idx) => (
                            <NavigationMenuLink
                              key={idx}
                              className="cursor-pointer hover:bg-accent p-2 rounded"
                              onClick={() => handleNavigation(service.href)}
                            >
                              {service.label}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className="cursor-pointer px-3 py-2"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="relative w-64">
            <Input type="search" placeholder={t.nav.search} className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("es")}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth */}
          {!isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <LoginDialog />
              <RegisterDialog />
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{user?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => navigate("/dashboard/perfil")}>
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard/configuracion")}
                >
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/plan")}>
                  Plan
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/sitios")}>
                  Sitios Web
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="text-red-500">
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-4">
                <div className="mb-4">
                  <Input
                    type="search"
                    placeholder={t.nav.search}
                    className="w-full"
                  />
                </div>

                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.label === t.nav.services ? (
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-start font-semibold"
                        >
                          {item.label}
                        </Button>
                        <div className="pl-4 space-y-2">
                          {serviceItems.map((service, idx) => (
                            <Button
                              key={idx}
                              variant="ghost"
                              className="w-full justify-start"
                              onClick={() => handleNavigation(service.href)}
                            >
                              {service.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.label}
                      </Button>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t">
                  {!isLoggedIn ? (
                    <div className="flex flex-col space-y-2">
                      <LoginDialog />
                      <RegisterDialog />
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Button
                        variant="ghost"
                        className="justify-start"
                        onClick={() => handleNavigation("/dashboard/perfil")}
                      >
                        <User className="h-5 w-5 mr-2" />
                        {user?.name}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={logout}
                        className="justify-start text-red-500"
                      >
                        Cerrar Sesión
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
