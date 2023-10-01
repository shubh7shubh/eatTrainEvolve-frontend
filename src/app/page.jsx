"use client"
import hero_image from "../assests/hero_image.png"
import hero_image_back from "../assests/hero_image_back.png"
import Heart from "../assests/heart.png"
import Calories from "../assests/calories.png"
import leftArrow from "../assests/leftArrow.png"
import rightArrow from "../assests/rightArrow.png"
import Image from "next/image"
import { useState } from "react"
import { testimonialsData } from "@/components/testimonialsData"
import{motion} from 'framer-motion'
import NumberCounter from 'number-counter';


export default function Home() {
  const [selected, setSelected] = useState(0)
  const tLength = testimonialsData.length
  const transition = {type:'spring', duration:3}
  // <motion.div initial={{left:"238px"}} whileInView={{left:"8px"}} transition={transition}></motion.div>
  return (
    <div>
      <header>
        <div className="App">
          <div className="blur hero-blur"></div>
          <div className="flex flex-col md:justify-between md:ml-6 md:flex-row  ">
            {/* the best add  */}
            <div className="flex-[3] flex gap-8 flex-col">
              <div className="md:mt-14 mt-5 bg-[#363d42] rounded-full text-white relative flex items-center justify-start w-fit px-4 py-4 self-center md:self-auto ">
                <motion.div initial={{left:"238px"}} whileInView={{left:"8px"}} transition={transition} className="absolute bg-[var(--orange)] w-20 h-[80%] left-2 rounded-[3rem] z-10">
                </motion.div>
                <span className="z-20">
                  The best fitness club in the town
                </span>
              </div>
              {/* hero heading */}
              <div className="flex flex-col items-center justify-center md:items-stretch md:justify-start  gap-6 uppercase text-7xl font-bold text-white text-ov">
                <div className="text-center md:text-left">
                  <span className="stroke_text">Shape </span>
                  <span>Your</span>
                </div>
                <div className="mt-2 text-center md:text-left">
                  <span>
                    Ideal Body
                  </span>
                  <div className="text-center md:text-left px-7 md:px-0">
                    <span className="text-base font-extralight normal-case tracking-wider w-[80%]">
                      IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                    </span>
                  </div>
                </div>


              </div>
              {/* Figures */}
              <div className="flex md:gap-8 gap-4 pl-5 md:pl-0  ">
                <div className="flex flex-col  ">
                  <span className="text-white md:text-4xl text-lg"><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
                  <span className="text-[var(--gray)] uppercase md:text-base text-sm">EXPERT COACHES</span>
                </div>
                <div className="flex flex-col  ">
                  <span className="text-white md:text-4xl text-lg "><NumberCounter end={876} start={800} delay='4' preFix="+" /></span>
                  <span className="text-[var(--gray)] uppercase md:text-base text-sm">members joined</span>
                </div>
                <div className="flex flex-col  ">
                  <span className="text-white md:text-4xl text-lg "><NumberCounter end={50} start={40} delay='4' preFix="+" /></span>
                  <span className="text-[var(--gray)] uppercase md:text-base text-sm">fitness programs</span>
                </div>
              </div>

              {/* hero button */}
              <div className="flex gap-4  font-normal pl-5 md:pla-0 ">
                <button style={{ color: "white", backgroundColor: "var(--orange)", width: "8rem" }} className="fBtn">Get Started</button>
                <button style={{ color: "white", backgroundColor: "transparent", border: "2px solid var(--orange)", width: "8rem" }} className="fBtn">Learn More</button>
              </div>

            </div>



            {/* rigth side */}
            <div className="flex-1 relative md:bg-[--orange] bg-none">
              {/* <button style={{ position: "absolute", right: "3rem", top: "2rem", color: "black" }} className="fBtn">Join Now</button> */}


              <motion.div transition={transition} whileInView={{right:"4rem"}} initial={{right:"-1rem"}} className="hidden md:flex flex-col  gap-4 bg-[var(--darkGrey)] w-fit p-4 items-start rounded-md absolute right-16 top-28">
                <Image className="w-8" src={Heart} alt="" />
                <span className="text-[var(--gray)]">Heart Rate</span>
                <span className="text-white text-2xl"> 116 bpm</span>
              </motion.div>

              {/* hero images  */}
              <Image className="relative w-[10rem] left-[10rem] top-1 md:absolute md:top-[6.2rem] md:left-[-7rem] md:w-[20rem]" src={hero_image} />
             <motion.div transition={transition} whileInView={{right:"0rem"}} initial={{right:"-11rem"}} className="relative">
             <Image className="relative top-[-20rem] right-[-7rem]  md:absolute md:-top-2 md:right-[17.3rem] -z-10 md:w-[17rem] md:h-[26rem]" src={hero_image_back} />
              </motion.div> 

              {/* calories */}
              <motion.div transition={transition} whileInView={{right:"28rem"}} initial={{right:"37rem"}} className="flex gap-8 bg-[var(--caloryCard)] rounded-md w-[180px] p-4 absolute top-[26rem] right-[30rem]">
                <Image className="w-12" src={Calories} />
                <div className="flex flex-col justify-between">
                  <span className="text-[var(--gray)]">Calories Burned</span>
                  <span className="text-white text-2xl">756 kcal</span>
                </div>

              </motion.div>

            </div>
          </div>



          {/* Testemonial and slider section */}
          <div className="flex gap-4 px-8 flex-col md:flex-row ">
            <div style={{ display: "flex", flex: "1 1", gap: "2rem", flexDirection: "column", textTransform: "uppercase", color: "white" }}>
              <span className="text-[var(--orange)] font-bold ">Testimonials</span>
              <span style={{ fontWeight: "bold", fontSize: "3rem" }} className="stroke_text">What they</span>
              <span style={{ fontWeight: "bold", fontSize: "3rem" }}>say about us</span>
              <motion.span key={selected} initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:100}} transition={transition} style={{ textTransform: "none", textAlign: "justify", letterSpacing: "2px", lineHeight: "40px" }}>
                {testimonialsData[selected].review}
              </motion.span>
              <span>
                <span className="text-[var(--orange)]">
                  {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
              </span>
            </div>

            <div className="flex-1 relative flex md:flex-row flex-col items-center justify-center md:items-stretch md:justify-start gap-8 md:gap-0  ">
              <motion.div transition={{...transition, duration:2}} whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} style={{ border: "2px solid orange" }} className="hidden md:block absolute w-[17rem] h-[20rem] bg-transparent right-36 top-4"></motion.div>
              <motion.div transition={{...transition, duration:2}} whileInView={{opacity:1, x:0}} initial={{opacity:0, x: 100}} style={{ background: "var(--planCard)", }} className="hidden md:block absolute w-[17rem] h-[19rem] top-16 right-28"></motion.div>
              <motion.div
    key={selected}
    transition={transition}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    className="relative top-0 right-0 md:absolute w-[17rem] h-[20rem] object-cover md:right-32 md:top-8"
>
    <Image
        className="absolute w-full h-full object-cover"
        src={testimonialsData[selected].image}
        alt="profile pic"
    />
</motion.div>
              <div className="flex gap-4 absolute bottom-4 left-12 pl-10 md:pl-0 " >
                <Image onClick={()=>{
                  selected === 0 ? setSelected(tLength -1) :
                  setSelected((prev)=> prev -1)
                }} className="w-[1.5rem] cursor-pointer" src={leftArrow} />
                <Image onClick={()=>{
                  selected === tLength -1 ? setSelected(0) :
                  setSelected((prev)=> prev + 1)
                }} className="w-[1.5rem] cursor-pointer" src={rightArrow} />
              </div>
            </div>
          </div>

        </div>
      </header>
    </div>
  )
}
