import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
function Call() {
    return (
        <div>

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
    )
}

export default Call