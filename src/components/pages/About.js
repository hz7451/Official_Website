import React from 'react';
import '../../App.css';
import Background from '../Background/background';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationOne } from '../animations'

export default function About() {
  return (
    <motion.div initial="out" animate="in" exit="out"
      variants={animationOne}>
      <Background />
      <Footer />
    </motion.div>
  )
}
