import React from 'react';
import { motion } from 'framer-motion';
import Education from './Education';
import { CreativeFields } from './CreativeFields';
import Softwares from './Softwares';
import { SocialLinks } from './SocialLinks';

const AboutSection:React.FC = () => {
  // Variants for section animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="bg-herobg py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <motion.h1 variants={itemVariants} className="text-5xl fraunces mb-8">
              Hello!
            </motion.h1>
            <div className="space-y-6 text-gray-700">
              {[
                "My name is <span className='font-medium text-black'>Bigyan Adhikari</span>, and I am a graphic designer specializing in brand development.",
                "My expertise extends beyond logos to encompass diverse design projects, including brand identity and visual branding, that are essential for any brand or company.",
                "I am committed to creating designs that not only look great but also effectively communicate the client's message and values."
              ].map((text, index) => (
                <motion.p 
                  key={index} 
                  variants={itemVariants}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={itemVariants}
            className="space-y-16"
          >
            <motion.div variants={itemVariants}>
              <Education />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CreativeFields />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Softwares />
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="mt-20"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutSection;