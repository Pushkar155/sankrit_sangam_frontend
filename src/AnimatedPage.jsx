import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: -50, scale: 0.5 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: 50, scale: 0.5 },
};

// const transition = { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] };
// const transition = { duration: 0.2, ease: "linear" };
// const transition = { duration: 0.3, staggerChildren: 0.1 };

// const transition = { duration: 0.4, ease: [0.68, -0.55, 0.27, 1.55] };
// const transition = { duration: 0.3, delay: 0.5 };
const transition = { duration: 0.4, ease: [0.68, -0.55, 0.27, 1.55] };



const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
