import { Header } from "@/components/HeaderComponent/Header";
import { ProfileInfo } from "@/components/ProfileInfoComponent/ProfileInfo";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function ProfileInfoPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <ProfileInfo></ProfileInfo>
    </>
  );
}
