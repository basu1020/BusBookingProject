import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi"

const Navbar = () => {

  const [showHamburger, setShowHamburger] = useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClickHamBurger = () => {
    if (showHamburger) {
      setShowHamburger(false)
    }

    else {
      setShowHamburger(true)
    }
  }

  return (
    <>
      {
        (screenWidth > 900) && 
        <nav className="m-0 relative bg-gray-100 w-full h-[5rem] text-center text-[1.25rem] text-black font-outfit">
        <div className="flex justify-between  items-center h-full">
          <div className="flex items-center justify-center w-1/2">
            <div className="font-black text-orange">
              <Link to="/" className="text-orange no-underline">
                Reserve
              </Link>
            </div>
            <div className="ml-10 font-medium">
              <Link to="/booking" className="text-black no-underline">
                Ticket
              </Link>
            </div>
            <div className="ml-10 font-medium">
              <Link to="/contact" className="text-black no-underline">
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <div className="flex flex-col items-center justify-end">
              <div className="rounded-md bg-orange w-[6.56rem] h-[1.81rem]" />
              <div className="mt-[-1.81rem] font-medium text-white">
                <Link to="/login" className="text-white no-underline">
                  Login
                </Link>
              </div>
            </div>
            <div className="ml-10 font-medium">
              <Link to="/signup" className="text-black no-underline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      }
      

      {(screenWidth <= 900) &&
        <nav className="bg-white flex flex-col h-auto items-start justify-start">
          <div className="font-black text-orange flex flex-row justify-between items-center h-auto w-full">
            <Link to="/" className="text-orange no-underline m-4">
              Reserve
            </Link>

            <button className='m-4 cursor-pointer' onClick={onClickHamBurger}>
              <BiMenuAltRight />
            </button>
          </div>

          {<div className={`${showHamburger ? 'slide-down-enter-active flex flex-col justify-center items-start h-full transition-all ease-in duration-500' : 'hidden slide-down-enter'}`}>
            <div className="m-4 font-medium">
              <Link to="/booking" className="text-black no-underline">
                Ticket
              </Link>
            </div>
            <div className="m-4 font-medium">
              <Link to="/contact" className="text-black no-underline">
                Contact us
              </Link>
            </div>
            <div className="m-4 font-medium text-white">
              <Link to="/login" className="text-black no-underline">
                Login
              </Link>
            </div>
            <div className="m-4 font-medium">
              <Link to="/signup" className="text-black no-underline">
                Register
              </Link>
            </div>
          </div>}
        </nav >
        }
    </>
  );
};

export default Navbar;
