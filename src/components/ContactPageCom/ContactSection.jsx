import React from 'react';
import kadınn from "../../assets/HomePageİmg/kadınn.jpg";

function ContactSection() {
    return (
        <div className="relative h-full mt-2 mb-2"> {/* Yüksekliği ekran yüksekliği kadar yap */}
            {/* Resim alanı */}
            <div className="absolute inset-0 z-0">
                <img src={kadınn} alt="Contact Us" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row p-6 md:pt-0 h-full"> {/* İçeriği tam yüksekliğe yay */}
                {/* Sol taraf: İletişim bilgileri ve buton */}
                <div className="md:w-1/2 md:pl-52 flex flex-col justify-center text-white bg-opacity-70 p-6 h-full mt-52">
                    <div className="flex flex-col md:items-start">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-lg mb-4">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-2 mb-6 rounded">Contact Us</button>
                    </div>
                </div>

                {/* Sağ taraf: Şehirler */}
                <div className="md:w-1/2 text-white ml-10 grid grid-cols-1 gap-6 md:mt-20 md:ml-80">
                    <div>
                        <div className="mb-6">
                            <h3 className="font-bold">Paris</h3>
                            <p>1901 Thorn ridge Cir.</p>
                            <div className="border-b-2  border-blue-500 w-16 mt-2"></div>
                            <p>75000 Paris</p>
                            <p>Phone; +451 215 215</p>
                            <p>Fax; +451 215 215</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">New York</h3>
                        <p>2715 Ash Dr. San Jose</p>
                        <div className="border-b-2 border-blue-500 w-16 mt-2"></div>
                        <p>75000 Paris</p>
                        <p>Phone; +451 215 215</p>
                        <p>Fax; +451 215 215</p>

                    </div>
                    <div>
                        <h3 className="font-bold">Berlin</h3>
                        <p>4140 Parker Rd.</p>
                        <div className="border-b-2 border-blue-500 w-16 mt-2"></div>
                        <p>75000 Paris</p>
                        <p>Phone; +451 215 215</p>
                        <p>Fax; +451 215 215</p>
                    </div>

                    <div>
                        <h3 className="font-bold">London</h3>
                        <p>1234 London St.</p> <div className="border-b-2 border-blue-500 w-16 mt-2"></div>
                        <p>75000 Paris</p>
                        <p>Phone; +451 215 215</p>
                        <p>Fax; +451 215 215</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
