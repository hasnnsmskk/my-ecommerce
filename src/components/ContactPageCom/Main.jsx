import React from 'react';
import shop from "../../assets/ContactPageİmg/shop.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
const ContactPage = () => {
  return (
    <div className="flex flex-col items-center w-full">


      {/* Ana içerik */}
      <section className="flex flex-col lg:flex-row w-full max-w-screen-lg p-4 lg:p-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-16">
          <p className='font-bold text-xs mb-4'>CONTACT US</p>
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <h1 className="text-4xl font-bold">today!</h1>
          <p className="mt-4 text-gray-500 text-left lg:text-left">
            <span className="block sm:inline">We know how large </span>
            <span className="block sm:inline"> objects will act, but things </span>
            <span className="block sm:inline"> on a small scale just do </span>
            <span className="block sm:inline"> not act that way.</span>
          </p>
          <div className="mt-6 text-left lg:text-left">
            <p className="font-bold">Phone: +451 215 215</p>
            <p className="font-bold">Fax: +451 215 215</p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <FaTwitter className="text-black" />
            <FaFacebook className="text-black" />
            <FaInstagram className="text-black" />
            <FaLinkedin className="text-black" />
          </div>
        </div>

        <section className="relative flex justify-center items-center mt-4">
          <div className="absolute md:mb-52 w-80 h-80 bg-pink-100 rounded-full md:w-80 md:h-80 sm:w-64 sm:h-64"></div>
          <div className="absolute mt-20 md:mt-46 ml-80 w-5 h-5 bg-pink-100 rounded-full md:w-5 md:h-5 sm:w-4 sm:h-4"></div>
          <div className="absolute ml-96 md:mb-80 w-5 h-5 bg-purple-600 rounded-full md:w-5 md:h-5 sm:w-4 sm:h-4"></div>
          <div className="absolute mb-52 md:mb-96 mr-96 w-16 h-16 bg-pink-100 rounded-full md:w-16 md:h-16 sm:w-12 sm:h-12"></div>

          <div className="w-full flex justify-center relative z-10">
            <img src={shop} alt="Shopping" className="w-full h-auto md:h-auto sm:h-[300px] object-cover" />
          </div>
        </section>

      </section>




      {/* Contact Information */}
      <div className='bg-gray-50 w-full'>
        <div className="lg:w-full lg:text-left text-center mb-8 md:mt-16">
          <p className="text-xs font-bold">VISIT OUR OFFICE</p>
          <h2 className="text-3xl mt-2 text-black font-bold">
            <span className="block sm:inline">We help small </span>
            <span className="block sm:inline"> businesses </span>
            <span className="block sm:inline"> with big ideas</span>
          </h2>
        </div>

        <section className="w-full  flex flex-col items-center p-4 lg:p-8 lg:flex-row lg:justify-center">
          {/* İletişim yöntemleri */}
          <div className="flex flex-col items-center justify-center w-full gap-6 lg:flex-row lg:justify-center lg:items-center">
            {/* Telefon */}
            <div className="flex flex-col items-center p-10 bg-white h-96 w-72">
              <FontAwesomeIcon icon={faPhone} className="text-5xl text-blue-500" />
              <p className="text-xs mt-4 text-black font-bold">georgia.young@example.com</p>
              <p className="text-xs mt-1 text-black font-bold">georgia.young@ple.com</p>
              <p className="text-xs mt-3 font-bold">Get Support</p>
              <button className="font-bold text-xs mt-12 px-6 py-2 bg-white border-1 border-blue-500 text-blue-500 rounded-1">Submit Request</button>
            </div>

            {/* Konum */}
            <div className="flex flex-col items-center p-10 bg-blue-950 text-white h-96 w-72">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl text-blue-500" />
              <p className="text-xs mt-4 font-bold">georgia.young@example.com</p>
              <p className="text-xs mt-1 font-bold">georgia.young@ple.com</p>
              <p className="text-xs mt-3 font-bold">Get Support</p>
              <button className="font-bold text-xs mt-12 px-6 py-2 bg-blue-950 border-1 border-blue-500 text-blue-500 rounded-1">Submit Request</button>
            </div>

            {/* E-posta */}
            <div className="flex flex-col items-center p-10 bg-white h-96 w-72">
              <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-blue-500" />
              <p className="text-xs mt-4 text-black font-bold">georgia.young@example.com</p>
              <p className="text-xs mt-1 text-black font-bold">georgia.young@ple.com</p>
              <p className="text-xs mt-3 font-bold">Get Support</p>
              <button className="font-bold text-xs mt-12 px-6 py-2 bg-white border-1 border-blue-500 text-blue-500 rounded-1">Submit Request</button>
            </div>
          </div>
        </section>
      </div>





      <section>
        <div className="lg:w-full lg:text-left  text-center mb-16 mt-16 relative">
          <FontAwesomeIcon icon={faArrowTurnDown} className="text-blue-500 text-5xl mb-4 inline-block" />

          {/* Metin ve butonlar */}
          <p className="text-xs font-bold">WE CAN'T WAIT TO MEET YOU</p>
          <h2 className="text-4xl mt-3 text-black font-bold">Let's Talk</h2>
          <button className="font-bold text-xs mt-4 px-6 py-2 bg-blue-500 text-white rounded-1">Try it free now.</button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
