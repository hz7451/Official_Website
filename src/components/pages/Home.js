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
      <Background headline='Lorem Ipsum' content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' />
      {/* <Cards /> */}
      <Footer />
    </motion.div>
  );
}

export default Home;
