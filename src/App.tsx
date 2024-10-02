import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contacts";
import ExperiencePage from "./pages/Experience";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },

    { path: "/skills", element: <SkillsPage /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/experience", element: <ExperiencePage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
