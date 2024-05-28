import { Header } from "@/components/HeaderComponent/Header";
import { Notification } from "@/components/NotificationsComponent/Notification";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function NotificationPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Notification></Notification>
    </>
  );
}
