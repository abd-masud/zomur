import { CustomerTransactions } from "@/components/CustomerTransactionsComponent/CustomerTransactions";
import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function CustomerTransactionsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <CustomerTransactions></CustomerTransactions>
    </>
  );
}
