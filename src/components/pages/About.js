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
      <Background headline='About Us' content='Blue Star Studio is a company dedicated on Animation and Website Design. We offer excellent 3D renders with affortable price. Please checkout the work page to see what we can do! Feel free to contact us for further enquires.' />
      <Footer />
    </motion.div>
  )
}
