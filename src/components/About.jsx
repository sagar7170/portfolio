import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1
    }}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl  justify-evenly mx-auto items-center '>
        <h1 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl '>About</h1>
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1, x:0
        }}
        viewport={{
            once:true
        }}
        
        className='-mb-20 mt-10 md:mb-0  flex shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:mt-44' src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1686045965/Picsart_23-06-06_15-34-05-310_sjvvfk.jpg" alt="" />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>
                Here is a {" "}<span className='underline decoration-[#F7AB0A]'>little</span>{" "} Background
            </h4>
            <p className='text-sm'>
            My name is Sagar, and I am a highly motivated and skilled professional with expertise in C++, Java,Ops,DSA, HTML5, CSS, JavaScript, and React.js. Despite being a fresher, I possess exceptional problem-solving skills and have successfully completed more than four projects utilizing the React.js framework.
              Throughout my journey as a developer, I have gained extensive knowledge and hands-on experience in various programming languages and web technologies. I have utilized my expertise in React.js to create projects that exhibit a high level of professionalism and technical proficiency.
            </p>
        </div>
    </motion.div>
  )
}

export default About