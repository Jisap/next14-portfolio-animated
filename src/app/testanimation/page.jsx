"use client"

import { motion } from "framer-motion"

const TestanimationPage = () => {

  const variants = {
    variant1: {
      x: 400,
      y: 300, 
      opacity: 0.5, 
      transition:{
        duration: 3
      }
    },
    variant2: {
      x: 100, y: -300, rotation: 90
    }
  }

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        initial={{ x: -100 }}
        variants={variants}
        animate="variant1"
        className="w-96 h-96 bg-red-400 rounded"
      >
      </motion.div>
    </div>
  )
}

export default TestanimationPage