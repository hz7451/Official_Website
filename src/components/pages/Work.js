import React from 'react';
import '../../App.css';
import Background from '../Background/background'
import { motion } from 'framer-motion';
import { animationOne } from '../animations'
import Footer from '../Footer';


export default function Work() {
  return (
    <motion.div initial="out" animate="in" exit="out"
      variants={animationOne}>
      <Background />
      <Footer />
    </motion.div>

  )
}
