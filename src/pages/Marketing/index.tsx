import { Header } from "@/components/HeaderComponent/Header";
import { Marketing } from "@/components/MarketingComponent/Marketing";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function MarketingPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Marketing></Marketing>
    </>
  );
}
