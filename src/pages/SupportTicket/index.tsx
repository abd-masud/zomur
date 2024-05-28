import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";
import { SupportTicket } from "@/components/SupportTicketComponent/SupportTicket";

export default function SupportTicketPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <SupportTicket></SupportTicket>
    </>
  );
}
