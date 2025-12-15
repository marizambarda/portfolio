import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

//components
import Menu from "./components/Menu/index.ts";

//pages
import HomePage from "./pages/HomePage/index.ts";
import AboutPage from "./pages/AboutPage/index.ts";
import ProjectsPage from "./pages/ProjectsPage/index.ts";
import ContactPage from "./pages/ContactPage/index.ts";
import ExperiencePage from "./pages/ExperiencePage/index.ts";
import MemoryGame from "./components/MemoryGame/MemoryGame.tsx";

function App() {
  return (
    <div className="app-shell">
      <StarBackground />

      <div className="section-content">
        <Menu />
        <HomePage />
        <AboutPage />
        <ExperiencePage />
        <ProjectsPage />
        <MemoryGame />
        <ContactPage />
      </div>
    </div>
  );
}

function StarBackground() {
  return (
    <div className="star-bg" aria-hidden="true">
      <div className="space stars1" />
      <div className="space stars2" />
      <div className="space stars3" />
    </div>
  );
}
export default App;
