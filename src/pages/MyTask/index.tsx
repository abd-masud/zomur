import { Header } from "@/components/HeaderComponent/Header";
import { MyTask } from "@/components/MyTaskComponent/MyTask";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function MyTaskPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <MyTask></MyTask>
    </>
  );
}
