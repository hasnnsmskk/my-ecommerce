import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


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


    </div>
  );
};

export default Teampage;
