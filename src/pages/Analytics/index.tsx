import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";
import { Analytics } from "@/components/AnalyticsComponent/Analytics";

export default function AnalyticsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Analytics></Analytics>
    </>
  );
}
