import React from "react";

const WorksCard = (props) => {
  return (
    <div className="shadow-lg rounded-sm hover:shadow-2xl sm:w-full   hover:ring-4 ring-green-500 hover:scale-105 duration-200 md:h-full bg-gray-100 ">
      <div className="object-contain ">
        <img className="" src={props.imgPath} alt="" />
      </div>
      <div className="bg-gray-100 p-6">
        <div className="flex items-center">
          <h2 className="text-green-500 mx-auto mt-5 text-xl font-semibold h-10 lg:text-base md:text-lg text-center">
            {props.title}
          </h2>
        </div>
        <div className="h-10 md:h-6 md:pt-3 lg:text-base md:text-sm  mb-4">
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;