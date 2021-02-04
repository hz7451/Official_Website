import React from 'react';
import '../../App.css';
import Background from '../Background/background';
import { motion } from 'framer-motion';
import { animationOne } from '../animations'
import Footer from '../Footer';

export default function Contact() {
  return (
    <motion.div
      initial="out" animate="in" exit="out" variants={animationOne}
      transition={animationOne}
    >
      <Background headline='Contact Us' content={[<br />, "Phone: +852 62088586", <br />, <br />, "Email: info@bluestarstudio.com"]} />
      <Footer />
    </motion.div>
  )
}
