import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="m-0 relative  bg-gray-100 w-[100vw] h-[5rem] text-center text-[1.25rem] text-black font-outfit">
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

    // </nav>
  );
};

export default Navbar;
