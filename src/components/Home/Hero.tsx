import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Buttons';
import { Badge } from '../ui/Badge';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  // Variants for staggered animations
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-herobg py-32 overflow-hidden"
    >
      {/* Decorative blur with motion */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          scale: [1, 1.1, 1],
          transition: { 
            duration: 5, 
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
        className="absolute right-1/4 top-1/4 w-96 h-9 rounded-full filter blur-[128px] opacity-30" 
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pt-24 pb-32"
      >
        {/* Year badge */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <Badge>Season 2023—24</Badge>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-2xl fraunces text-center leading-none mb-8"
        >
          Bigyan <span className='text-orange-400'> Adhikari</span> 
        </motion.h1>
        {/* Main heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-7xl fraunces text-center leading-none mb-8"
        >
          Portfolio
        </motion.h1>

        {/* Creative Designer text with sparkle */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              transition: { 
                duration: 0.5, 
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
          >
            <Sparkles className="w-5 h-5 text-green-500" />
          </motion.div>
          <span className="text-lg text-gray-600">Creative Designer</span>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {['Logofolio', 'Media Post', 'Product Branding'].map((label) => (
            <motion.div
              key={label}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" icon>
                {label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
