import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";
import { Sun, Moon } from "lucide-react";

const Settings = () => {
  const { theme, setTheme, accentColor, setAccentColor } = useStore();
  const { toast } = useToast();

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    toast({
      title: "Tema actualizado",
      description: `Se ha cambiado al modo ${newTheme === "dark" ? "oscuro" : "claro"}.`,
    });
  };

  const handleAccentColorChange = (color: string) => {
    setAccentColor(color);
    document.documentElement.style.setProperty("--custom-color", color);
    toast({
      title: "Color actualizado",
      description: "Se ha cambiado el color principal.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6 custom-text">Configuración</h2>

        <div className="space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div className="space-y-0.5">
              <Label className="flex items-center gap-2 text-lg">
                {theme === "dark" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
                Modo {theme === "dark" ? "Oscuro" : "Claro"}
              </Label>
              <p className="text-sm text-muted-foreground">
                Cambiar entre modo claro y oscuro
              </p>
            </div>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={handleThemeChange}
              className="scale-125"
            />
          </div>

          {/* Accent Color */}
          <div className="space-y-4">
            <Label className="text-lg">Color Principal</Label>
            <div className="grid grid-cols-4 gap-4">
              {[
                { color: "#0091ff", name: "Azul" },
                { color: "#00b341", name: "Verde" },
                { color: "#f5a623", name: "Naranja" },
                { color: "#ff0080", name: "Rosa" },
                { color: "#7c3aed", name: "Púrpura" },
                { color: "#ef4444", name: "Rojo" },
                { color: "#06b6d4", name: "Cyan" },
                { color: "#14b8a6", name: "Turquesa" },
              ].map(({ color, name }) => (
                <button
                  key={color}
                  className={`aspect-square rounded-xl transition-all flex items-center justify-center text-white text-sm font-medium ${accentColor === color ? "ring-4 ring-offset-2 ring-offset-background custom-ring scale-105" : "hover:scale-105"}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleAccentColorChange(color)}
                  title={name}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
