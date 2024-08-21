import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = ({ setLoading }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  // Hide the animation after it completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time to match your animation duration

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }} // Adjust timing to match your animation
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Optional: Background color to cover the whole screen
        zIndex: 1000,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </svg>
    </motion.div>
  );
};

export default LoadingAnimation;

