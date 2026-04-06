import { Outlet, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MotionMain = motion.main;
const DitherBackground = lazy(() => import("./Dither"));

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
      <div className="background-dither-wrap" aria-hidden="true">
        <Suspense fallback={null}>
          <DitherBackground
            colorNum={4}
            disableAnimation={prefersReducedMotion}
            enableMouseInteraction={!prefersReducedMotion}
            mouseRadius={0.28}
            waveAmplitude={0.42}
            waveColor={[0.1, 0.2, 0.34]}
            waveFrequency={2.5}
            waveSpeed={0.024}
          />
        </Suspense>
      </div>
      <div className="background-grid" />
      <div className="background-dither" />
      <div className="background-orb background-orb--one" />
      <div className="background-orb background-orb--two" />
      <Navbar />
      <AnimatePresence mode="wait">
        <MotionMain
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="page-shell"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 18, filter: "blur(6px)" }
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
