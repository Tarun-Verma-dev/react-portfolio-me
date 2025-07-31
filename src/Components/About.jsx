import { motion } from 'motion/react'

const About = () => {
  return (
    <>
    <div className='h-screen w-full pt-20'>
       <motion.div
        whileInView={{
            x:100,
          transition:{
            ease:"easeIn",
          }
        }}
        className='h-full w-full p-30 bg-cover bg-[url("https://imgs.search.brave.com/zgwp7THA-XCvbfioODRRlkQNll087RwTm5uOIazq15A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDYu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VT/VW5RcEk0UzAyVzhZ/RnZWVk8wLUl4R0ZM/Z291YUVQODBRQV9n/d3pTM1duTXBGNXpl/cGRDWUZYY1h0R29J/eFM1elhQYkw2V0E0/R3l4ZkI1WnFVdWNa/bDNRalRqQkdadmhh/cTFzZDVlNk5Yb3lj/SDRNa3YtSC1neDZC/R2ZtXzJUbmRFalFk/Y0h4NGFjam5lekhh/UVBJdkU")]'>
      <h1>about</h1>
       </motion.div>
    </div>
    </>
  )
}

export default About
