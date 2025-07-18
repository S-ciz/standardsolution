

import Showcase from "./includes/showcase/showcase";
import Navbar from "./includes/navbar/navbar";
import About from "./includes/about/about";
import Services from "./includes/services/services";
import Dropdown from "./includes/dropdown/dropdown";
import Bio from "./includes/bio/bio";
import Contact from "./includes/contact/contact";
import Footer from "./includes/footer/footer";

export default function Home() {
  return (

    <>

      <Navbar />
      <Showcase />
      <About/>
      <Services/>
      <Dropdown/>
      <Bio/>
      <Contact/>
      <Footer/>

    </>
  );
}
