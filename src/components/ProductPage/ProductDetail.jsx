import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faShoppingCart, faEye, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import koltuk from "../../assets/ProductDetailİmg/koltuk.jpg";
import sandalye from "../../assets/ProductDetailİmg/sandalye.jpg";

function ProductDetail() {
    const images = [koltuk, sandalye];
    const [mainImage, setMainImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setMainImage(images[newIndex]);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setMainImage(images[newIndex]);
    };

    return (
        <div className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <h1 className="text-xl font-bold text-center md:text-left md:ml-4">Shop</h1>
                    <nav className="text-center md:text-right mt-2 md:mt-0 md:mr-4">
                        <Link to="/" className="text-base text-black font-bold hover:underline">Home</Link> &gt; <span className="text-gray-500">Shop</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto my-18 p-4 flex flex-col md:flex-row md:space-x-4">
                {/* Sol Tarafta Resimler */}
                <div className="flex flex-col md:w-1/2">
                    {/* Ana Resim */}
                    <div className="relative mb-4">
                        <img src={mainImage} alt="Product Image" className="w-full h-[500px] object-cover" />
                        {/* Sol ve sağ yön tuşları */}
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300">
                                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300">
                                <FontAwesomeIcon icon={faArrowRight} size="lg" />
                            </button>
                        </div>
                    </div>
                    {/* Küçük Resimler */}
                    <div className="flex space-x-2">
                        <img
                            src={koltuk}
                            alt="Small Thumbnail 1"
                            className="w-20 h-20 object-cover border border-gray-300 cursor-pointer"
                            onClick={() => {
                                setMainImage(koltuk);
                                setCurrentIndex(images.indexOf(koltuk));
                            }}
                        />
                        <img
                            src={sandalye}
                            alt="Small Thumbnail 2"
                            className="w-20 h-20 object-cover border border-gray-300 cursor-pointer"
                            onClick={() => {
                                setMainImage(sandalye);
                                setCurrentIndex(images.indexOf(sandalye));
                            }}
                        />
                    </div>
                </div>

                {/* Sağ Tarafta Ürün Detayları */}
                <div className="md:w-1/2 flex flex-col">
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold text-gray-800">Floating Phone</h2>
                        <div className="flex items-center my-4">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
                                <FontAwesomeIcon icon={faStar} className="text-gray-400 text-lg" />
                                <span className="ml-2 text-gray-600 text-sm">(10 Reviews)</span>
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 my-2">$1,139.33</p>
                        <p className="text-blue-500 font-semibold my-2">Availability: In Stock</p>
                        <p className="mt-8 text-gray-600">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
                        </p>

                        {/* Renk seçenekleri */}
                        <div className="flex mt-4 space-x-2">
                            <button className="w-6 h-6 rounded-full bg-blue-500"></button>
                            <button className="w-6 h-6 rounded-full bg-green-500"></button>
                            <button className="w-6 h-6 rounded-full bg-orange-500"></button>
                            <button className="w-6 h-6 rounded-full bg-black"></button>
                        </div>

                        {/* Butonlar */}
                        <div className="mt-4 flex space-x-2">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 text-sm">Select Options</button>
                            <button className="p-2 border rounded-md hover:bg-gray-200">
                                <FontAwesomeIcon icon={faHeart} className="text-gray-600" />
                            </button>
                            <button className="p-2 border rounded-md hover:bg-gray-200">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600" />
                            </button>
                            <button className="p-2 border rounded-md hover:bg-gray-200">
                                <FontAwesomeIcon icon={faEye} className="text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
