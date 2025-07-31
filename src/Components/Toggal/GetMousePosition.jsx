import { useEffect, useState } from 'react'
import { motion, scale } from 'motion/react';
import { animate } from 'motion';
import { filter } from 'motion/react-client';

export default function GetMousePosition(){
    const [mousePosition, setMousePosition] = useState({x: 0,y: 0});

    const updatePosition=(e)=>{
      setMousePosition({x: e.clientX , y: e.clientY});
    }

    useEffect(() => {
        window.addEventListener("mousemove",updatePosition)
        return()=>{
          window.removeEventListener("mousemove",updatePosition)
        }
    }, [])
    const vari={
      default:{
        x:mousePosition.x -15,
        y:mousePosition.y -15,
        
      }
    }

  return (
    <>
    <motion.div
    variants={vari}
    animate={"default"}
    transition={{
      ease:"backOut"
    }}
    className='h-10 w-10 bg-blue-300 rounded-full blur-sm'
    >
      <div className='h-10 w-10 bg-blue-300 rounded-full blur-md'></div>
    </motion.div>

    </>

  )

}
