import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Buttons';
import { Badge } from '../ui/Badge';
import { Sparkles, ArrowDownRight } from 'lucide-react';



const FloatingDesignShapes: React.FC = () => {
  const shapeVariants = [
    {
      svg: (
        <svg viewBox="0 0 200 200" className="w-32 h-32 text-orange-200">
          <path 
            d="M100 10 L190 70 L150 170 L50 170 L10 70 Z" 
            fill="currentColor" 
            opacity="0.5"
          />
        </svg>
      ),
      animationProps: {
        animate: { 
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          rotate: [0, 10, -10, 0],
          transition: { 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }
        },
        className: "absolute top-1/4 left-1/4"
      }
    },
    {
      svg: (
        <svg viewBox="0 0 200 200" className="w-40 h-40 text-green-200">
          <circle 
            cx="100" 
            cy="100" 
            r="80" 
            fill="currentColor" 
            opacity="0.4"
          />
        </svg>
      ),
      animationProps: {
        animate: { 
          x: [0, -50, 50, 0],
          scale: [0.9, 1.1, 0.9],
          transition: { 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }
        },
        className: "absolute bottom-1/4 right-1/4"
      }
    },
    {
      svg: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-blue-200">
          <path 
            d="M100 20 L180 100 L100 180 L20 100 Z" 
            fill="currentColor" 
            opacity="0.5"
          />
        </svg>
      ),
      animationProps: {
        animate: { 
          rotate: [0, 360],
          y: [0, -20, 20, 0],
          transition: { 
            duration: 12, 
            repeat: Infinity,
            ease: "linear"
          }
        },
        className: "absolute top-1/3 right-1/3"
      }
    },
    {
      svg: (
        <svg viewBox="0 0 200 200" className="w-28 h-28 text-purple-200">
          <rect 
            x="40" 
            y="40" 
            width="120" 
            height="120" 
            transform="rotate(45 100 100)" 
            fill="currentColor" 
            opacity="0.4"
          />
        </svg>
      ),
      animationProps: {
        animate: { 
          x: [0, 30, -30, 0],
          scale: [0.95, 1.05, 0.95],
          transition: { 
            duration: 9, 
            repeat: Infinity,
            ease: "easeInOut"
          }
        },
        className: "absolute bottom-1/3 left-1/3"
      }
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {shapeVariants.map((shape, index) => (
        <motion.div 
          key={index}
          {...shape.animationProps}
        >
          {shape.svg}
        </motion.div>
      ))}
    </div>
  );
};


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
      {/* Add the new FloatingDesignShapes component */}
      <FloatingDesignShapes />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pt-24 pb-32 relative z-10"
      >
        {/* Rest of the existing Hero content remains the same */}
        {/* Year badge */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <Badge>Season 2023—24</Badge>
        </motion.div>

        {/* Detailed name and title */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8 space-y-2"
        >
          <motion.h2 
            className="text-4xl md:text-6xl fraunces tracking-tight text-gray-800"
          >
            Bigyan <span className='text-orange-500 italic'>Adhikari</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 tracking-wide"
          >
            Design is not just what it looks like, but how it works
          </motion.p>
        </motion.div>

        {/* Creative Designer text with sparkle */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 20, -20, 0],
              transition: { 
                duration: 0.5, 
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
          >
            <Sparkles className="w-6 h-6 text-green-500" />
          </motion.div>
          <span className="text-lg text-gray-700">
            Creative <span className='text-orange-500 font-bold'>Designer</span>
          </span>
        </motion.div>

        {/* Navigation buttons with icons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { label: 'Logofolio', icon: <ArrowDownRight className="mr-2 w-4 h-4" /> },
            { label: 'Media Post', icon: <ArrowDownRight className="mr-2 w-4 h-4" /> },
            { label: 'Product Branding', icon: <ArrowDownRight className="mr-2 w-4 h-4" /> }
          ].map(({ label, icon }) => (
            <motion.div
              key={label}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="flex items-center">
                {icon}
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