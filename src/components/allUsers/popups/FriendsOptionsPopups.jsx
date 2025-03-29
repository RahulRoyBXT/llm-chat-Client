import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ onClick, KEY }) => {
  return (
    <motion.div
      key={KEY} // Helps Framer Motion track the component
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-accent shadow-lg rounded-lg p-4 text-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <p className="text-black font-semibold">This feature is coming soon!</p>
    </motion.div>
  );
};

export default ComingSoon;
