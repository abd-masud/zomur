import { Header } from "@/components/HeaderComponent/Header";
import { HomePage } from "@/components/HomeComponent/Home";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function SalesAnalysisPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <HomePage></HomePage>
    </>
  );
}
