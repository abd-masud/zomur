import { Header } from "@/components/HeaderComponent/Header";
import { History } from "@/components/HistoryComponent/History";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function HistoryPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <History></History>
    </>
  );
}
