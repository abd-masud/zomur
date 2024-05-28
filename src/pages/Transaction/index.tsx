import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";
import { Transaction } from "@/components/TransactionComponent/Transaction";

export default function TransactionPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Transaction></Transaction>
    </>
  );
}
