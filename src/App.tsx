import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/user/Dashboard";
import ContactForm from "./components/contact/ContactForm";
import WebTemplates from "./components/services/WebTemplates";
import DatabaseServices from "./components/services/DatabaseServices";
import Header from "./components/layout/Header";
import PlanComparison from "./components/subscription/PlanComparison";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/plantillas" element={<WebTemplates />} />
          <Route
            path="/servicios/base-de-datos"
            element={<DatabaseServices />}
          />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/precios" element={<PlanComparison />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
