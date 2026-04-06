import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MotionMain = motion.main;

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function Layout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="site-shell">
      <ScrollToTop />
      <div className="background-dither-wrap" aria-hidden="true" />
      <div className="background-grid" />
      <div className="background-dither" />
      <div className="background-orb background-orb--one" />
      <div className="background-orb background-orb--two" />
      <Navbar />
      <AnimatePresence mode="wait">
        <MotionMain
          animate={{ opacity: 1, y: 0 }}
          className="page-shell"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 14 }
          }
          key={location.pathname}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </MotionMain>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
