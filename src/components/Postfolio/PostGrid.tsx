import React from 'react';
import { motion } from 'framer-motion';
import { PostCard } from './PostCard';
import { postData } from './postData';

const PostGrid: React.FC = () => {
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
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {postData.map((post, index) => (
        <motion.div 
          key={post.id}
          variants={itemVariants}
          whileHover="hover"
          className={`
            ${index % 2 === 0 
              ? 'sm:translate-y-[-40px] lg:translate-y-[-40px]' 
              : 'sm:translate-y-[40px] lg:translate-y-[40px]'}
            hover:translate-y-0
            sm:even:translate-y-[40px] sm:odd:translate-y-[-40px]
            lg:even:translate-y-[40px] lg:odd:translate-y-[-40px]
          `}
        >
          <PostCard {...post} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default PostGrid;