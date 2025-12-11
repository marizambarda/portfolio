import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

//components
import Menu from "./components/Menu/index.ts";

//pages
import HomePage from "./pages/HomePage/index.ts";
import AboutPage from "./pages/AboutPage/index.ts";
import ProjectsPage from "./pages/ProjectsPage/index.ts";
import ContactPage from "./pages/ContactPage/index.ts";

function App() {
  return (
    <div className="section-content">
      <Menu />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
