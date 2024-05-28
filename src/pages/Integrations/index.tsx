import { Header } from "@/components/HeaderComponent/Header";
import { Integrations } from "@/components/IntegrationsComponent/Integrations";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function IntegrationsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Integrations></Integrations>
    </>
  );
}
