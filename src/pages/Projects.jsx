import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../containers/Projects";
import ProjectsHero from "../containers/ProjectsHero";
import ProjectsMain from "../containers/ProjectsMain";

function ProjectPage() {

  return (
<>
      <Navbar />    
      <main>
        <ProjectsHero />
        <ProjectsMain />
      </main>
      <Footer />
   </>
  )
}

export default ProjectPage;
