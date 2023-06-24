import React, { useEffect, useRef } from 'react';
import { motion, useScroll,useAnimation,useMotionValueEvent } from "framer-motion"
import LiIcon from './contents/LiIcon';
import '../index.css';



const Details = ({ positon, compony, companyLink, time, address, work ,img_path,darkMode,scrollref}) => {
    const ref = useRef(null);

    return <li ref={ ref } className={darkMode ? "dark":""}>
        <div className='flex justify-between  '>
            <div className='flex-initial w-2/5 md:w-2/5 py-4  '>
                <img  className='' src={img_path} />
            </div>
            <div className='flex-grow'>
                <LiIcon/>
                
            </div>
            

                
            
            <div className=' flex-initial w-2/5  dark:text-gray-100'>
                <div className='py-10'>
                <h3 className='capitalize font-bold text-lg sm:text-xl lg:text-3xl'>{positon}&nbsp;<a href={companyLink}
                        target="_blank"
                        className='text-primary capitalize hover:text-blue-400 duration-30'
                    >@{compony}</a></h3>
                    <span className='capitalize font-medium text-sm lg:text-xl text-dark/75'>
                        {time} | {address}
                    </span>
                    <p className='font-medium w-full text-sm lg:text-xl'>
                        {work}
                    </p>
                </div>


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
                            img_path = "./img/Career/bunkasai.JPG"
                            positon="大阪府立天王寺高等学校 入学"
                            compony="大阪"
                            time="2016"
                            address="4月"
                            companyLink="https://www2.osaka-c.ed.jp/tennoji/"
                            work="文化祭でロゴをデザインしました"
                        />
                        
                        <Details
                            img_path = "./img/Career/highscrool_gradu.jpg"
                            positon="大阪府立天王寺高等学校 卒業"
                            compony="大阪"
                            time="2019"
                            address="3月"
                            companyLink="https://www2.osaka-c.ed.jp/tennoji/"
                            work=""
                        />
                        <Details
                                img_path = "./img/SIG_ACI.jpg"
                                positon="大阪府立大学 工学域 入学"
                                compony="大阪府"
                                time="2019"
                                address="4月"
                                companyLink="http://www.eng.osakafu-u.ac.jp/school/school_computer_science/school_computer_science"
                                work="アルバイトや母校のバレー部のコーチをしていました"
                        />
                        <Details
                                img_path = "./img/Career/SIG_ACI.jpg"
                                positon="SIG-ACIで発表"
                                compony="京都工業繊維大学"
                                time="2023"
                                address="修士１年"
                                companyLink="https://med-ai.jp/"
                                work="初の学会発表! ポスターセッションです。"
                            />
                        <Details
                                img_path = "./img/SIG_ACI.jpg"
                                positon="大阪公立大学 大学院 入学"
                                compony="大阪公立大学大学院 情報学研究科"
                                time="2022"
                                address="修士１年"
                                companyLink="https://www.omu.ac.jp/i/dci/"
                                work="無事に卒論を終え、華と激務の大学院生活！"
                                
                        />
  
                    </ul>
            </div>
        </section>
        
    )
    
};


export default Career