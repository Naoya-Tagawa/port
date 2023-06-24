import React, { useEffect, useRef } from 'react';
import { motion, useScroll,useAnimation,useMotionValueEvent } from "framer-motion"
import LiIcon from './contents/LiIcon';
import '../index.css';
import '../styles/darkmodeparts.css';

const Details = ({ positon, compony, companyLink, time, address, work ,img_path,darkMode,scrollref}) => {
    const ref = useRef(null);
    
    const scrollcomponets = {
        visiable:{
            y:0,
            opacity:1,
            transition:{
                type: "spring",
                bounce: 0.2,
                duration: 0.5

            },
        },
        hidden:{
            y:10,
            opacity:0,
        },
    }

    return <li ref={ ref } className={darkMode ? "dark":""}>
        <div className='flex justify-center'>
            <svg className="-rotate-90 w-[60px] h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="80" cy="53" r="20"className={darkMode ?  "white_circle" : "black_circle" } />
            </svg>
            
                
        </div>
            
        <div className='flex justify-between'>
            <motion.div className='flex-initial  w-1/2 md:w-2/5 py-4 px-2 'ref={scrollref} variants={scrollcomponets}  initial="hidden" whileInView="visiable" viewport={{once:true,amount:0.5}}>
                <img src={img_path}   />
            </motion.div>


                
            
            <div className=' flex-initial w-2/5   dark:text-gray-100'>
                <h3 className='capitalize font-bold text-lg sm:text-2xl lg:text-3xl'>{positon}&nbsp;<a href={companyLink}
                        target="_blank"
                        className='text-primary capitalize hover:text-blue-400 duration-30'
                    >@{compony}</a></h3>
                    <span className='capitalize font-medium text-lg lg:text-xl text-dark/75'>
                        {time} | {address}
                    </span>
                    <p className='font-medium w-full text-lg lg:text-xl'>
                        {work}
                    </p>
                


            </div>

            {/*<motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -50 }}
                transition={{ duration: 0.5, type: "spring" }}
                style={{ transform: 'none'}}
            >
                
                <h3 className='capitalize font-bold text-lg sm:text-xl lg:text-3xl'>{positon}&nbsp;<a href={companyLink}
                    target="_blank"
                    className='text-primary capitalize'
                >@{compony}</a></h3>
                <span className='capitalize font-medium text-sm lg:text-xl text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-sm lg:text-xl'>
                    {work}
                </p>
            </motion.div>*/}
        </div>
    </li>
}

function Career({darkMode}) {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start center", "end end"]
        }
    )


    return (
        <section className={ darkMode ? "dark":""}>
            <div ref={ref} className='mx-auto relative '>
 

                    <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute  left-1/2   w-[4px] h-full bg-gray-900 dark:bg-gray-100  origin-top'></motion.div>
                    


                    <ul className=" flex flex-col  ">
                        

            
                        <Details className= " min-h-screen"
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/baby.jpg"
                            positon="生まれる"
                            compony="大阪府"
                            time="2000"
                            address="写真は3歳くらい"
                            companyLink="https://missioncollege.edu/"
                            work="盛れてる写真です"
                        />
                        <Details
                        
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/bunkasai.JPG"
                            positon="大阪府立天王寺高等学校 入学"
                            compony="大阪"
                            time="2016"
                            address="4月"
                            companyLink="https://www2.osaka-c.ed.jp/tennoji/"
                            work="行事と勉強と部活に追われてました！文化祭でロゴをデザインしました"
                        />
                        
                        <Details
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/highscrool_gradu.jpg"
                            positon="大阪府立天王寺高等学校 卒業"
                            compony="大阪"
                            time="2019"
                            address="3月"
                            companyLink="https://www2.osaka-c.ed.jp/tennoji/"
                            work="充実した3年間でした!家が遠くて通うのは大変でしたが..."
                        />
                        <Details
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/volley.JPG"
                            positon="大阪府立大学 工学域 入学"
                            compony="大阪府"
                            time="2019"
                            address="4月"
                            companyLink="http://www.eng.osakafu-u.ac.jp/school/school_computer_science/school_computer_science"
                            work="アルバイトや母校のバレー部のコーチをしていました"
                        />
                        <Details
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/omu_gradu.JPEG"
                            positon="大阪府立大学 工学域 卒業"
                            compony="大阪公立大学"
                            time="2023"
                            address="2月"
                            companyLink="https://www.omu.ac.jp/i/dci/"
                            work="無事に卒論を終え、卒業!"
                                
                        />
                        <Details
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/SIG_ACI.jpg"
                            positon="SIG-ACIで発表"
                            compony="京都工業繊維大学"
                            time="2023"
                            address="3月"
                            companyLink="https://med-ai.jp/"
                            work="初の学会発表! ポスターセッションです。"

                            />
                            
                        <Details
                            scrollref={ref1}
                            darkMode={darkMode}
                            img_path = "./img/Career/entrance_ceramony_omu.jpg"
                            positon="大阪公立大学 大学院 入学"
                            compony="大阪公立大学大学院 情報学研究科"
                            time="2023"
                            address="4月"
                            companyLink="https://www.omu.ac.jp/i/dci/"
                            work="同じ大学なのに名前が違う!華と激務の大学院生活！"
                                
                        />
  
                    </ul>
            </div>
        </section>
        
    )
    
};


export default Career