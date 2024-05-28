import { ECommerce } from "@/components/ECommerceComponent/ECommerce";
import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function ECommercePage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <ECommerce></ECommerce>
    </>
  );
}
