import { motion, useMotionValue, useTransform, animate, easeIn, useScroll, scale } from "framer-motion";
import { useEffect, useState ,useRef } from "react";
import { useNavigate } from 'react-router-dom';
import About from './About'
import Project from './Project'
import Resume from './Resume'
import Card from './Toggal/Card'
import CursorBlinker from "./Toggal/CursorBlinker";
import { FiArrowRightCircle } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import GetMousePosition from "./Toggal/GetMousePosition"
import { BsListNested } from "react-icons/bs";

const Home = () => {

  //scrolling smooth effect in framer motion 
  // const container = useRef(null);
  //  const {scrollY}=useScroll({
  //   target: container,
  //   offset: ['start end', 'end start']
  // })
  // const sm = useTransform(scrollY, [0, 1], [0, -50]);
  // const md = useTransform(scrollY, [0, 1], [0, -150]);
  // const lg = useTransform(scrollY, [0, 1], [0, -250]);

  // variale that store useNavigate function in react router 
  const navigate = useNavigate();


// text animation block
 const baseText = "Hi, I'm Tarun,\nI'm a FullStack Webdevloper Fresher,\nBut experienced";
 const count=useMotionValue(0);
 const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
    useEffect(() => {
    const controls = animate(count, baseText.length, {
      duration: 3,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  // button animation variable block
  const [isHover, setIsHover] = useState(false);
    const [isHover1, setIsHover1] = useState(false);
  
  // console.log(isHover)

  //button 2 animation

  const btn={
    whileHover:{
      opacity:0
    }
  }

  return (
    <>
    <GetMousePosition/> 
    <div className='h-screen w-full pt-20'>
        <div className='h-full w-full p-30'>
          <div className="h-60 w-full">
            <span className=" whitespace-pre-line">
      <motion.span
       className="font-semibold text-7xl">{displayText}</motion.span>
      <CursorBlinker />
    </span>
          </div>
          
              {/* <p className='font-semibold text-7xl'><span>Hi, I'm Tarun,</span><br/>
            <span>I'm a <span className='bg-blue-300 pl-3 pr-3'>FullStack Webdevloper</span>  Fresher,</span> <br/>
            <span>But experienced</span> 
          </p> */}
        <motion.p

         className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor distinctio consectetur, delectus itaque molestiae quasi laboriosam commodi. Deleniti doloremque numquam explicabo architecto in dolorem similique tenetur enim exercitationem sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam omnis reprehenderit nostrum deleniti quos est minima, cum obcaecati reiciendis eaque vitae doloribus. Explicabo, optio dolores error similique voluptate quae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque aliquam eum? Atque, ab dicta neque illo nesciunt placeat consequatur ullam laborum doloremque molestiae dolorem voluptatem, voluptates quidem libero illum?
        </motion.p>
       <div className='flex gap-5 mt-3'>

        {/* Here start the button 1st code */}

        <div className="h-10 w-45 overflow-clip flex bg-gray-500 items-center relative rounded cursor-pointer"
         onMouseEnter={(e)=>setIsHover(true)} 
         onMouseLeave={(e)=>setIsHover(false)}
         >
         <motion.div
         animate={{
          scale: isHover ? 100 : 1,
          }} 
          transition={{
            ease:"easeIn",
            duration:0.2,
          }}
         className="bg-blue-400 rounded-full h-1 absolute right-45 w-1 z-10">
         </motion.div>
          <motion.div className="z-20 flex items-center">
            {/* defineing the button to router */}
            <motion.button className=' font-semibold text-left z-20 pl-4 cursor-pointer' onClick={(e)=>navigate("/projects")} >
           <motion.p
           animate={{
            x: isHover ? -1 : 5,
           }}
          >View My Work</motion.p>
          </motion.button>
          <motion.div
          animate={{
            x: isHover ? 5 : 1,
           }}
           className="flex justify-center z-20 items-center">
            <FiArrowRightCircle
           className="text-2xl top-2 font-thin ml-3"/>
         </motion.div>
          </motion.div>
        </div>

        {/* Here end the 1st button code */}
         
         {/* 2nd buttton block */}
         <motion.div className="h-10 w-30 flex border items-center overflow-clip justify-center gap-2 z-20 rounded"
         onMouseEnter={(e)=>setIsHover1(true)} 
         onMouseLeave={(e)=>setIsHover1(false)}
         >
          <motion.span
          animate={{
            x:isHover1 ? 35:1,
            scale:isHover1? 1.5:1
          }}
          transition={{
            ease:"easeInOut",
            duration:.4
          }}
           className=" flex items-center z-20 text-2xl justify-center cursor-pointer">
            <SiMinutemailer />
            </motion.span>
          <motion.div
          variants={btn}
          animate={isHover1? "whileHover":0}
          transition={{
            ease:"easeInOut",
            duration:.4
          }}
           className="cursor-pointer">
            <button className="cursor-pointer" type="button">
            <p className="font-bold">Let's Talk</p>
            </button>
             </motion.div>
         </motion.div>
        
        {/* 2nd button end */}

       </div>
       <h1 className='mt-20  0 text-xl'>Featured Projects</h1>
       <div className='flex gap-8 mt-5'>
        <Card img={"https://imgs.search.brave.com/Hfst6GtUkfpZWqVkr3VtN1yT2Q42w7v1mwrDrsxbS58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tL2Nkbi1j/Z2kvaW1hZ2UvZj1h/dXRvLHE9NzAvNDk0/OWU1M2UtZTg5MS00/MmU5LTljZmEtMDkx/OWY4ODkzNzgzL3Bo/b3RvLWVkaXRvcl9y/ZXNvdXJjZXNfSW1h/Z2VDb252ZXJ0b3Jf/ZnItRlIucG5n"}/>
        <Card img={"https://imgs.search.brave.com/GO8ZB_gMZoE28uWTwsOjitIQ-cvL5jrv1h_8nqpyG_g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/c29jaWFsLW1lZGlh/L29uLWJyYW5kLndl/YnA"}/>
        <Card img={"https://imgs.search.brave.com/YnmJphx8ZfPwMMLXA2I24UpZYad_F_Q19toRFAa7m5o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tL2Nkbi1j/Z2kvaW1hZ2UvZj1h/dXRvLHE9NzAvOTdh/NjgwYTEtZjczYS00/MWViLWIzMDQtZjhj/MTk2NTExNTllL21h/Z2ljLXBob3RvX3By/b21vLXNob3djYXNl/XzA1MngucG5n"}/>
        <Card img={"https://imgs.search.brave.com/XejMxy2HWmT1sJFMT4h84Js0zMRidYSMmw3fX4Zk6dI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzE4/MjU0NDUvZmVhdHVy/ZV9haS1pbWFnZS1l/bmhhbmNlcl9ob3ct/dG80eC5qcGc"}/>
        <Card img={"https://imgs.search.brave.com/1LEVzKjoA8Hqiv5ljt_J-Mrzyo0VvE5u6a6EjD2WPqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdXBw/b3J0Lm1pY3Jvc29m/dC5jb20vaW1hZ2Vz/L2VuLXVzLzllZmM5/ZDRjLTEyZTEtNDQ0/MC1hZTBiLTkwZjE3/Yjk4NjRhNA"}/>
       </div>
        </div>
    </div>
    <section id="about" style={{ height: '100vh' }}>
      <About/>
    </section>
    <section id="projects" style={{ height: '100vh' }}>
      <Project/>
    </section>
    <section id="resume" style={{ height: '100vh' }}>
      <Resume/>
    </section>
    </>
  )
}

export default Home
