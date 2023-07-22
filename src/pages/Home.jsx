import Hero from "../containers/Hero";
import Navbar from "../components/Navbar";
import Mission from "../containers/Mission";
import Service from "../containers/Service";
import Services from "../containers/Services";
import Clients from "../containers/Clients";
import Projects from "../containers/Projects";
import Reviews from "../containers/Reviews";
import Footer from "../components/Footer";
import Team from "../containers/Team";
import Contact from "../containers/Contact";

function Home() {

  return (
<>
      <Navbar />    
      <main>
        <Hero />
        <Mission />
        <Service />
        <Services />
        <Clients />
        <Projects />
        <Reviews />
        <Team />
        <Contact /> 
      </main>
      <Footer />
   </>
  )
}

export default Home;
