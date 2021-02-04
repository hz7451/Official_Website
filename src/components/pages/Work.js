import React from 'react';
import '../../App.css';
// import Background from '../Background/background'
import { motion } from 'framer-motion';
import { animationOne } from '../animations'
import Footer from '../Footer';
// import Pure_Background from '../Pure_Background/pure_background';
// import Cards from '../Cards'
import Gallery from '../Gallery/Gallery';

export default function Work() {
  return (
    <motion.div initial="out" animate="in" exit="out"
      variants={animationOne}>
      <Gallery />
      {/* <Cards /> */}
      <Footer />
    </motion.div>

  )
}
