import { useMemo } from "react";

const ReviewContainer = ({ customerSince2020Left }) => {
  const review3Style = useMemo(() => {
    return {
      left: customerSince2020Left,
    };
  }, [customerSince2020Left]);

  return (
    <div
      className="absolute top-[4.69rem] left-[11.81rem] w-[100vw] h-[12rem] text-center text-[0.63rem] text-dimgray-200 font-outfit"
      style={review3Style}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-6xs bg-gray-100 w-[21.56rem] h-[12rem]" />
      <div className="absolute top-[3.5rem] left-[8.06rem] font-medium inline-block w-[7.25rem] h-[1.25rem]">
        customer since 2020
      </div>
      <div className="absolute top-[1.56rem] left-[7.19rem] text-[1.25rem] font-medium text-gray-200 inline-block w-[9.5rem] h-[1.94rem]">
        Vatsal Pulkit
      </div>
      <div className="absolute top-[1.25rem] left-[2.5rem] rounded-[50%] bg-gainsboro w-[3.63rem] h-[3.5rem]" />
      <div className="absolute top-[5.5rem] left-[2.69rem] rounded bg-limegreen w-[3.25rem] h-[0.94rem]" />
      <div className="absolute top-[7.19rem] left-[2.69rem] text-[0.88rem] font-light text-black text-left inline-block w-[16.44rem]">
        This was the best bus service out of all past experiences
      </div>
    </div>
  );
};

export default ReviewContainer;
