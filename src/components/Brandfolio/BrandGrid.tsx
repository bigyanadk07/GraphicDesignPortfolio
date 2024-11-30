import React from 'react';
import { motion } from 'framer-motion';
import PinterestPost from './BrandCard';
import Boba from "./images/Boba-Coffee.png";
import Menu from "./images/Restaurant-menu.png";

const Data = [
  {
    imageUrl: Boba,
    title: "Bobaria",
    description: "Indulge in the perfect blend of creamy coffee and chewy boba pearls at Boba Ria! ☕🧋 The ultimate treat for coffee and bubble tea lovers alike. #BobaCoffee #BobaRia #CoffeeTime #BubbleTeaLove",
    username: "BobaRia",
    userAvatar: "/path/to/avatar.jpg",
  },
  {
    imageUrl: Menu,
    title: "Restaurant Menu Design",
    description: "Exciting news! 🎉 Our new menu is here, and it's packed with irresistible flavors you'll love. From fresh, innovative dishes to classic favorites with a twist, there's something for everyone to enjoy. Come taste the difference and discover your new favorite at [Restaurant Name]! 🍴✨ #NewMenu #FoodieHeaven #FreshFlavors #DineWithUs",
    username: "MiMi Restro",
    userAvatar: "/path/to/avatar.jpg",
  }
];

const ProductPage: React.FC = () => {
  // Variants for container and item animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
      scale: 1.02,
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
      className='bg-herobg flex flex-col items-center space-y-6 p-6'
    >
      {Data.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover="hover"
        >
          <PinterestPost 
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            username={item.username}
            userAvatar={item.userAvatar}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProductPage; 