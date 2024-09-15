import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import detay from "../../assets/ProductDetailİmg/detay.jpg"
const Detail = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Tab Menüsü */}
            <ul className="flex justify-center space-x-4 border-b whitespace-nowrap">
                <li>
                    <a href="#" className="py-2 px-4 border-b-2 border-transparent hover:border-gray-800">
                        Description
                    </a>
                </li>
                <li>
                    <a href="#" className="py-2 px-4 border-b-2 border-transparent hover:border-gray-800">
                        Additional Information
                    </a>
                </li>
                <li>
                    <a href="#" className="py-2 px-4 border-b-2 border-transparent hover:border-gray-800">
                        Reviews (0)
                    </a>
                </li>
            </ul>

            {/* İçerik Bölümü */}
            <div className="mt-4 flex flex-col lg:flex-row">
                {/* Görsel Alanı */}
                <div className="relative w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    {/* Arka Plan */}
                    <div className="absolute left-0 bottom-0 w-full h-full bg-gray-200 rounded-lg transform translate-x-3 translate-y-3"></div>

                    {/* Resim */}
                    <img
                        src={detay} // Buraya kendi ürün görsel URL'nizi ekleyin
                        alt="Ürün Görseli"
                        className="relative z-10 rounded-lg shadow-lg max-w-xs lg:max-w-full"
                    />
                </div>

                {/* Metin İçeriği */}
                <div className="w-full lg:w-1/2 space-y-6 lg:flex lg:justify-between ml-10">
                    <div className="lg:w-1/2 mx-auto">
                        <h2 className="text-2xl font-bold">the quick fox jumps over</h2>
                        <p className="text-gray-600 text-justify max-w-[500px] mx-auto">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-gray-600 text-justify max-w-[500px] mx-auto">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                    </div>


                    {/* İkonlu Liste */}
                    <div className="lg:w-1/2 space-y-4 mt-0 ml-12">
                        <h3 className="text-xl font-bold ">the quick fox jumps over</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>

                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold">the quick fox jumps over</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                                <span className="ml-2">the quick fox jumps over the lazy dog</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Detail;
