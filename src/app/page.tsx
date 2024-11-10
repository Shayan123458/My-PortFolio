import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skills from "./component/skills";
export default function Home() {
  return (
<div className=" bg-white">
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Project/>
  <Contact/>
  
</div>
  );
}
