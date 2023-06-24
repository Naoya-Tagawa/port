import React from "react";
import { motion, useScroll } from "framer-motion"
const LiIcon = ({reference}) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className="stroke-dark   dark:stroke-light">
            <svg className="rotate-90 w-[60px] h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                

                <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary items-center"/>
            </svg>
        </figure>
    )
}

export default LiIcon