import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./Profile";
import Settings from "./Settings";
import WebsiteList from "./WebsiteList";
import UserPlan from "./UserPlan";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="websites">Sitios Web</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Profile />
        </TabsContent>
        <TabsContent value="settings">
          <Settings />
        </TabsContent>
        <TabsContent value="plan">
          <UserPlan />
        </TabsContent>
        <TabsContent value="websites">
          <WebsiteList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
