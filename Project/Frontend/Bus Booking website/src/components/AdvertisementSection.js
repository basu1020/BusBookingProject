import React from 'react';

const AdvertisementSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <section className="w-full h-[31.19rem] text-center text-[0.63rem] text-gray-200 font-outfit">
        <h3 className="text-[2.19rem] font-medium font-inherit mb-6">
          India’s largest bus booking service
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="rounded-lg bg-gray-100 shadow-md m-2 p-6 w-[15.94rem] h-[15.44rem] text-center">
            <img
              className="rounded-md w-[11.19rem] h-[9.69rem] object-cover mb-4"
              alt=""
              src="/people-1-1@2x.png"
            />
            <p>20 Million</p>
            <p className="font-medium">happy customers globally</p>
          </div>
          <div className="rounded-lg bg-white shadow-md m-2 p-6 w-[15.94rem] h-[15.44rem] text-center">
            <img
              className="rounded-md w-[11.38rem] h-[9.75rem] object-cover mb-4"
              alt=""
              src="/bussesjpeg-1@2x.png"
            />
            <p>2000+</p>
            <p className="font-medium">bus collection</p>
          </div>
          <div className="rounded-lg bg-gray-100 shadow-md m-2 p-6 w-[15.94rem] h-[15.44rem] text-center">
            <img
              className="rounded-md w-[10.19rem] h-[9.44rem] object-cover mb-4"
              alt=""
              src="/bustickets-1-1@2x.png"
            />
            <p className="text-lg">5000+</p>
            <p className="text-lg">tickets booked everyday</p>
          </div>
        </div>
        <h3 className="text-[1.88rem] font-medium font-inherit mt-6">
          Here’s what our customers have to say about us
        </h3>
      </section>
    </div>
  );
};

export default AdvertisementSection;
