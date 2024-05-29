import { Customers } from "@/components/CustomersComponent/Customers";
import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function CustomersPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Customers></Customers>
    </>
  );
}
