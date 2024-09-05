import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function TopBar() {
    return (
        <div className="bg-gray-800 text-white p-2 text-sm">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>modabenim@destek.com</span>
                    </div>
                </div>


                <div className="text-center">
                    <span>Follow us and get a chance to win 80% off</span>
                </div>


                <div className="flex space-x-4 items-center mr-4">
                    <span>Follow us:</span>
                    <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faYoutube} className="hover:text-gray-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-400 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default TopBar;
