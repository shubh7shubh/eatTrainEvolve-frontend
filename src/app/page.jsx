import hero_image from "../assests/hero_image.png"
import hero_image_back from "../assests/hero_image_back.png"
import Heart from "../assests/heart.png"
import Calories from "../assests/calories.png"
import Image from "next/image"
export default function Home() {
  return (
    <div>
      <header>
        <div className="App">
          <div className="flex justify-between ml-6">
            {/* the best add  */}
            <div className="flex-[3] flex gap-8 flex-col">
              <div className="mt-14 bg-[#363d42] rounded-full text-white relative flex items-center justify-start w-fit px-4 py-4">
                <div className="absolute bg-[var(--orange)] w-20 h-[80%] left-2 rounded-[3rem] z-10">
                </div>
                <span className="z-20">
                  The best fitness club in the town
                </span>
              </div>
              {/* hero heading */}
              <div className="flex flex-col gap-6 uppercase text-7xl font-bold text-white text-ov">
                <div>
                  <span className="stroke_text">Shape </span>
                  <span>Your</span>
                </div>
                <div className="mt-2">
                  <span>
                    Ideal Body
                  </span>
                  <div>
                    <span className="text-base font-extralight normal-case tracking-wider w-[80%]">
                      IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                    </span>
                  </div>
                </div>


              </div>
              {/* Figures */}
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-white text-4xl ">+140</span>
                  <span className="text-[var(--gray)] uppercase">EXPERT COACHES</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-4xl ">+856</span>
                  <span className="text-[var(--gray)] uppercase">members joined</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-4xl ">+50</span>
                  <span className="text-[var(--gray)] uppercase">fitness programs</span>
                </div>
              </div>

              {/* hero button */}
              <div className="flex gap-4 font-normal ">
                <button style={{color:"white",backgroundColor:"var(--orange)",width:"8rem"}} className="fBtn">Get Started</button>
                <button style={{color:"white",backgroundColor:"transparent",border:"2px solid var(--orange)",width:"8rem"}} className="fBtn">Learn More</button>
              </div>

            </div>



            {/* rigth side */}
            <div className="flex-1 relative bg-[--orange]">
              <button style={{position:"absolute",right:"3rem",top:"2rem",color:"black"}} className="fBtn">Join Now</button>
 

              <div className="flex flex-col gap-4 bg-[var(--darkGrey)] w-fit p-4 items-start rounded-md absolute right-16 top-28"> 
                <Image className="w-8" src={Heart} alt="" />
                <span className="text-[var(--gray)]">Heart Rate</span>
                <span className="text-white text-2xl"> 116 bpm</span>
              </div>

            </div>
          </div>

        </div>
      </header>
    </div>
  )
}
