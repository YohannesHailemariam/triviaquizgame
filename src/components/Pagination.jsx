import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <motion.button
          key={page}
          className={`mx-2 py-2 px-4 rounded-lg ${currentPage === page ? 'bg-gradient-to-tr from-blue-500 to-blue-950 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => onPageChange(page)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={variants}
        >
          {page}
        </motion.button>
      ))}
    </div>
  );
};

export default Pagination;
