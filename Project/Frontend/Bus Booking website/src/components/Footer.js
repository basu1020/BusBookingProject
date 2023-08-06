const Footer = () => {
  return (
    <div className="bg-gainsboro text-left text-sm text-black font-outfit">
      <div className="flex justify-evenly flex-wrap py-8 px-6 sm:flex-col">
        <div className="flex flex-col items-center ">
          <div className="text-xl font-black text-orange flex items-start w-full">Reserve</div>
          <div className="font-extralight items-start m-2 w-full">When you have a choice, Choose Reserve</div>
        </div>
        <div className="flex flex-col items-start sm:items-center">
          <div className="font-extralight">About us</div>
          <div className="font-extralight mt-2">Contact us</div>
          <div className="font-extralight mt-2">FAQ</div>
        </div>
        <div className="flex flex-col items-start sm:items-center">
          <div className="font-extralight mt-2">Careers</div>
          <div className="font-extralight mt-2">T & C</div>
          <div className="font-extralight mt-2">Privacy Policy</div>
        </div>
        <div className="flex flex-col items-start sm:items-center">
          <div className="font-extralight mt-2">Blog</div>
          <div className="font-extralight mt-2">Useful Links</div>
          <div className="font-extralight mt-2">Follow Us</div>
        </div>
      </div>
      <div className="border-t border-dimgray-100 my-8 mx-6"></div>
      <div className="text-xs font-extralight text-center mb-2">All rights reserved - 2023</div>
      <div className="text-xs font-extralight text-center mb-2">reserve.bus@reserve.com</div>
      {/* <div className="bg-orange text-white py-2 text-sm font-black text-center">Reserve</div> */}
    </div>
  );
};

export default Footer;
