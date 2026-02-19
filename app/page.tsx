import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div className="site-root">
      <Nav />
      <Hero />

      <main className="main-content">
        <Projects />
        {/* <About /> */}
        <WorkExperience />
      </main>
    </div>
  );
}
