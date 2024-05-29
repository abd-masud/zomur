import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";
import { Wallet } from "@/components/WalletComponent/Wallet";

export default function Home() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Wallet></Wallet>
    </>
  );
}
