"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion";

function Progress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      style={{ 
        scaleX: scrollYProgress, 
        originX: 0,
        transformOrigin: "0%" 
      }} 
    />  
  )
}

export default Progress