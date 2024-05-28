import { Header } from "@/components/HeaderComponent/Header";
import { OrderProducts } from "@/components/OrderProductsComponent/OrderProducts";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function OrderProductsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <OrderProducts></OrderProducts>
    </>
  );
}
