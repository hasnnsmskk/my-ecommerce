import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';

import erhan from "../../assets/TeamPageİmg/erhanfırat.png"
import gokhan from "../../assets/TeamPageİmg/gokhanozdemir.png"
import hasan from "../../assets/TeamPageİmg/hasan.png"
const TeamSection = () => {
    const teamMembers = [
        { name: 'Erhan FIRAT', role: 'Project Owner', image: erhan },
        { name: 'Gökhan Özdemir', role: 'Scrum Master', image: gokhan },
        { name: 'Hasan Şimşek', role: 'Full Stack Developer', image: hasan },

    ];

    return (
        <div className="font-sans">




            {/* Team Section */}
            <section className="bg-white py-16 md:ml-56 md:mr-56">
                <h2 className="text-3xl font-bold text-center ">Meet Our Team</h2>
                <p className='text-gray-500 text-center mb-32 lg:w-1/2 mx-auto'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Dynamic Team Members */}
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center md:mb-16">
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

export default TeamSection;
