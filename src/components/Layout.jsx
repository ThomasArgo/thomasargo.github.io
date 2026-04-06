import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundCanvas from "./BackgroundCanvas";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <BackgroundCanvas />
      <Navbar />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
