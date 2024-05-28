import { Header } from "@/components/HeaderComponent/Header";
import { Products } from "@/components/ProductsComponent/Products";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function ProductsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Products></Products>
    </>
  );
}
