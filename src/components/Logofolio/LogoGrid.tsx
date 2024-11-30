import React from 'react';
import { motion } from 'framer-motion';
import LogoCard from './LogoCard';
import { logoData } from './logoData';

export const LogoGrid: React.FC = () => {
  // Variants for grid and item animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24"
    >
      {logoData.map((logo) => (
        <motion.div
          key={logo.id}
          variants={itemVariants}
          whileHover="hover"
          className="w-full"
        >
          <LogoCard {...logo} />
        </motion.div>
      ))}
    </motion.div>
  );
}