import React from "react";

const WorksCard = (props) => {
  return (
    <div className="shadow-lg rounded-sm hover:shadow-2xl  hover:ring-4 ring-green-500 hover:scale-105 duration-200 md:h-full bg-gray-100 items-center">
      <div className="object-contain md:h-60">
        <img className="" src={props.imgPath} alt="" />
      </div>
      <div className="bg-gray-100 p-6">
        <div className="flex items-center">
          <h2 className="text-green-500 mx-10 mt-5 font-semibold h-10 text-center">
            {props.title}
          </h2>
        </div>
        <div className="h-10 md:h-6 mb-4">
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;