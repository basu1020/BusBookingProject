import React from 'react';
import { IoMail, IoCall, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const ContactUsPage = () => {
  // Replace these with your company's email and toll-free number
  const email = 'contact@example.com';
  const tollFreeNumber = '1-800-123-4567';

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url(https://img.freepik.com/free-vector/contact-concept-landing-page_52683-19707.jpg?w=996&t=st=1690034551~exp=1690035151~hmac=497b5943a579ccd98d90037e2cf0406347d639d2cd8b0eb2c838e3fa0d6d0801)] bg-cover bg-no-repeat bg-[center]">
      <div className="bg-white rounded-xl">
      <div className="w-3/4 sm:w-1/2 px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Get in touch with us</h3>
          <p className="mb-2">
            <IoMail className="inline-block mr-2" />
            {email}
          </p>
          <p className="mb-2">
            <IoCall className="inline-block mr-2" />
            {tollFreeNumber}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect with us on social media</h3>
          <div className="flex mb-4">
            <a
              href="https://www.facebook.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-500 hover:text-blue-700"
            >
              <IoLogoFacebook size={32} />
            </a>
            <a
              href="https://www.twitter.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-500 hover:text-blue-400"
            >
              <IoLogoTwitter size={32} />
            </a>
            <a
              href="https://www.instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-500 hover:text-pink-500"
            >
              <IoLogoInstagram size={32} />
            </a>
            <a
              href="https://www.linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <IoLogoLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsPage;
