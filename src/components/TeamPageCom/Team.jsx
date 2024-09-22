import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import hero1 from "../../assets/TeamPageİmg/hero1.jpg"
import hero2 from "../../assets/TeamPageİmg/hero2.jpg"
import { Link } from 'react-router-dom';
import erhan from "../../assets/TeamPageİmg/erhanfırat.png"
import gokhan from "../../assets/TeamPageİmg/gokhanozdemir.png"
import hasan from "../../assets/TeamPageİmg/hasan.png"
const Teampage = () => {
  const teamMembers = [
    { name: 'Erhan FIRAT', role: 'Project Owner', image: erhan },
    { name: 'Gökhan Özdemir', role: 'Scrum Master', image: gokhan },
    { name: 'Hasan Şimşek', role: 'Full Stack Developer', image: hasan },
    { name: 'Ali Veli', role: 'Frontend Developer', image: 'path_to_member1_image.jpg' },
    { name: 'Ayşe Kaya', role: 'Backend Developer', image: 'path_to_member2_image.jpg' },
    { name: 'Mehmet Can', role: 'UI/UX Designer', image: 'path_to_member3_image.jpg' },
    // Diğer takım üyeleri
  ];

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="mt-0 bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Innovation tailored for you</h1>
        <div className="container mx-auto px-4">
          <nav className="text-center md:text-right mt-2 md:mt-0 md:mr-4">
            <Link to="/" className="text-base text-black font-bold hover:underline">Home</Link> &gt; <span className="text-gray-500">Team</span>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mt-8">
          <img src={hero1} alt="Image1" className="w-full h-[600px] md:w-1/4 mb-4 md:mb-0" />
          <div className="grid grid-cols-2 gap-4">
            <img src={hero2} alt="Image2" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
            <img src={hero2} alt="Image3" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
            <img src={hero2} alt="Image4" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
            <img src={hero2} alt="Image5" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="bg-white py-16 md:ml-56 md:mr-56">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamic Team Members */}
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-full h-80 object-cover  mb-4" />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <FaFacebook className="text-blue-500" />
                <FaInstagram className="text-pink-500" />
                <FaTwitter className="text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
        <p className="text-gray-500 mb-8">Met minim mollie non desert alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600">
          Try it free now
        </button>
        <div className="flex justify-center space-x-4 mt-8">
          <FaFacebook className="text-blue-500" />
          <FaInstagram className="text-pink-500" />
          <FaTwitter className="text-blue-400" />
          <FaLinkedin className="text-blue-700" />
        </div>
      </section>
    </div>
  );
};

export default Teampage;
