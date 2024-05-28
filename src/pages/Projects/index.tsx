import { Header } from "@/components/HeaderComponent/Header";
import { Projects } from "@/components/ProjectsComponent/Projects";
import { SideBar } from "@/components/SideMenuComponent/SideMenu";

export default function ProjectsPage() {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <Projects></Projects>
    </>
  );
}
