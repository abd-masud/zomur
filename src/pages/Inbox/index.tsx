import { Header } from "@/components/HeaderComponent/Header";
import { Inbox } from "@/components/InboxComponent/Inbox";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function InboxPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Inbox></Inbox>
    </>
  );
}
