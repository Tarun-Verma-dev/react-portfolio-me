import React from 'react'
import { motion } from 'motion/react'
import { useState,useEffect } from 'react';

const CursorBlinker = () => {
  const data=localStorage.getItem("modeName");
  const [color,setColor]=useState({
    backgroundColor:"black"
  })
  useEffect(() => {
    if(data==="Dark Mode !"){
      setColor({backgroundColor:"white"});
    }
    else{
      setColor({backgroundColor:"black"});
    }
   }, [])
     const cursor={
    blinking:{
      opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
}
  return (
    <motion.div
    style={color}
          variants={cursor}
          animate="blinking"
          className="inline-block h-15 ml-2 w-[4px] translate-y-1"
          >
          </motion.div>
  )
}

export default CursorBlinker
