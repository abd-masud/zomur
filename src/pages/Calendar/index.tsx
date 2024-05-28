import { Calender } from "@/components/CalendarComponent/Calender";
import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function CalenderPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Calender></Calender>
    </>
  );
}
