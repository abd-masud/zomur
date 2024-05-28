import { Header } from "@/components/HeaderComponent/Header";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";
import { User } from "@/components/UserComponent/User";

export default function UserPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <User></User>
    </>
  );
}
