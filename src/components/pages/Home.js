import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Background from '../Background/background';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';
import Hero2 from '../Hero2/Hero2'

function Home() {
  return (
    <motion.div
      initial="out" animate="in" exit="out" variants={animationOne}
      transition={transition}
    >
      <Hero2 headline='WELCOME' content='Are you looking for Website / Animation ?' />
      <Background headline='About Us' content='Blue Star Studio is a company dedicated on Animation and Website Design. We offer excellent 3D / 2D renders with affortable price. Please checkout the work page to see what we can do! Feel free to contact us for further enquires.' />
      {/* <Cards /> */}
      <Footer />
    </motion.div>
  );
}

export default Home;
