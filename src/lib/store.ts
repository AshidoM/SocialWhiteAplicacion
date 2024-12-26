import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "./i18n";

interface UserState {
  isLoggedIn: boolean;
  user: {
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    websites?: Array<{
      id: number;
      name: string;
      url: string;
      type: string;
      status: string;
    }>;
    plan?: {
      name: string;
      price: number;
      billingCycle: "monthly" | "annual";
      paymentMethod?: {
        type: string;
        last4: string;
        expiry: string;
      };
      nextPayment?: string;
    };
  } | null;
  language: Language;
  theme: "light" | "dark";
  accentColor: string;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: "light" | "dark") => void;
  setAccentColor: (color: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<UserState["user"]>) => void;
  updateBio: (bio: string) => void;
  addWebsite: (website: { name: string; type: string }) => void;
}

export const useStore = create<UserState>(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      language: "es",
      theme: "light",
      accentColor: "#0091ff",
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.classList.toggle("dark", theme === "dark");
      },
      setAccentColor: (color) => set({ accentColor: color }),
      login: (email, password) => {
        // Demo login
        if (email === "prueba" && password === "1234") {
          set({
            isLoggedIn: true,
            user: {
              name: "Usuario Prueba",
              email: "usuario.prueba@example.com",
              avatar:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=usuario.prueba",
              bio: "¡Hola! Soy un usuario de prueba de SocialWhite.",
              websites: [
                {
                  id: 1,
                  name: "Mi Portafolio",
                  url: "portafolio.socialwhite.com",
                  type: "Personal",
                  status: "Activo",
                },
              ],
              plan: {
                name: "Plan Básico",
                price: 30,
                billingCycle: "monthly",
                paymentMethod: {
                  type: "credit_card",
                  last4: "4242",
                  expiry: "12/24",
                },
                nextPayment: "2024-05-01",
              },
            },
          });
        }
      },
      logout: () => set({ isLoggedIn: false, user: null }),
      updateProfile: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
      updateBio: (bio) =>
        set((state) => ({
          user: state.user ? { ...state.user, bio } : null,
        })),
      addWebsite: (website) =>
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                websites: [
                  ...(state.user.websites || []),
                  {
                    id: Date.now(),
                    name: website.name,
                    url: `${website.name.toLowerCase().replace(/ /g, "-")}.socialwhite.com`,
                    type: website.type,
                    status: "Activo",
                  },
                ],
              }
            : null,
        })),
    }),
    {
      name: "socialwhite-storage",
    },
  ),
);
