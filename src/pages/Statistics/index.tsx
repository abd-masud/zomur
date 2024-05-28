import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";
import { Statistics } from "@/components/StatisticsComponent/Statistics";

export default function StatisticsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Statistics></Statistics>
    </>
  );
}
