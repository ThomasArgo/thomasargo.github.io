import { motion, useReducedMotion } from "framer-motion";

const MotionDiv = motion.div;

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MotionSection({
  children,
  className,
  delay = 0,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionDiv
      animate={prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { delay, duration: 0.58, ease: [0.22, 1, 0.36, 1] }
      }
      variants={revealVariants}
      viewport={{ amount: 0.2, once: true }}
      whileInView={prefersReducedMotion ? undefined : "visible"}
    >
      {children}
    </MotionDiv>
  );
}
