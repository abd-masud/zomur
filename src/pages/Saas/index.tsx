import { Header } from "@/components/HeaderComponent/Header";
import { Saas } from "@/components/SaasComponent/Saas";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function SaasPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Saas></Saas>
    </>
  );
}
