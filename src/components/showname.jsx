import React from "react";
import axios from "axios";
import { useEffect, useState ,useRef} from 'react'
const Showname = (props) => {
    const baseurl = "http://localhost:5000/naoya "
    const [post, setPost] = useState("");
    const handleclick = () => {
        axios.get(baseurl).then((response)=>{
            console.log(response.data)
            setPost(response.data);
        })
      }


    return (
        <button onClick = {handleclick} className="shadow-lg rounded-sm hover:shadow-2xl  hover:ring-4 ring-green-500 hover:scale-105 duration-200 md:h-full bg-gray-100 items-center">
            <p>クリックしてね!</p>
            <p>{post}</p>
        </button>
    );
};

export default Showname;