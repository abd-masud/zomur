import { AddCustomer } from "@/components/AddCustomerComponent/AddCustomer";
import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function AddCustomerPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <AddCustomer></AddCustomer>
    </>
  );
}
