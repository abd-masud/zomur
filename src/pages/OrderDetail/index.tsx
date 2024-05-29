import { Header } from "@/components/HeaderComponent/Header";
import { OrderDetail } from "@/components/OrderDetailComponent/OrderDetail";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function Home() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <OrderDetail></OrderDetail>
    </>
  );
}
