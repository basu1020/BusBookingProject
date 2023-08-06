import React from "react";

const ReviewContainer = () => {
  return (
    <div className="h-auto w-[300px] text-center text-xs text-dimgray-200 font-outfit flex items-center m-2">
      <div className="w-96 h-[20vh] bg-gray-100 rounded-md flex flex-col items-center justify-center p-2">
        <div className="flex flex-row w-full">
          <div className="items-center flex flex-col w-2/5">
            <div className="bg-gray-400 rounded-full h-[60px] w-[60px]"> </div>
            <div className="w-fit h-auto bg-green-400 rounded-md text-white px-2 py-1 mt-2">4.5 ⭐ </div>
          </div>
          <div className="flex flex-col w-2/5">
            <div className="text-xl font-medium text-gray-200">Vatsal Pulkit</div>
            <div className="text-lg font-light mt-1">customer since 2020</div>
            <div className="text-lg font-medium mt-2 text-left">
              This was the best bus service out of all past experiences
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;

