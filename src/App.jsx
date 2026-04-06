import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Models from "./pages/Models";
import Websites from "./pages/Websites";
import Apps from "./pages/Apps";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/models" element={<Models />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
