import React from 'react';

function Header() {
    return (
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold">Get answers to all your questions.</h1>
            <p className="text-gray-600 mt-4">
                Problems trying to resolve the conflict between the two major realms of Classical physics:
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 mt-6 rounded">Contact Our Company</button>
            <div className="flex justify-center space-x-4 mt-6">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Header;
