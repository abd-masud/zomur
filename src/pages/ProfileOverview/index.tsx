import { Header } from "@/components/HeaderComponent/Header";
import { ProfileOverview } from "@/components/ProfileOverviewComponent/ProfileOverview";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function ProfileOverviewPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <ProfileOverview></ProfileOverview>
    </>
  );
}
