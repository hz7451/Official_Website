import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Background from '../Background/background';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function Home() {
  return (
    <motion.div
      initial="out" animate="in" exit="out" variants={animationOne}
      transition={transition}
    >
      <HeroSection />
      <Background />
      {/* <Cards /> */}
      <Footer />
    </motion.div>
  );
}

export default Home;
