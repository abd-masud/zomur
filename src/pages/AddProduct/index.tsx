import { AddProduct } from "@/components/AddProductComponent/AddProduct";
import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function AddProductPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <AddProduct></AddProduct>
    </>
  );
}
