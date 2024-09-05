import React from 'react';
import resim from "../../assets/HomePageİmg/ressim.jpg";
import resimm from "../../assets/HomePageİmg/kadınn.jpg"
import img from "../../assets/HomePageİmg/orti.jpg"
const Carousel1 = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide  top-12">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner w-full h-[650px]">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={resimm} className="d-block w-100 h-auto" alt="..." />
                    <div className="carousel-caption text-left md:text-start bottom-80">
                        <h5 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 lg:mb-4 uppercase tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 text-white">
                            NEW COLLECTION
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act,<br />
                            but things on a small scale.
                        </p>
                        <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-4 py-2 rounded">
                            SHOP NOW
                        </a>
                    </div>


                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={resim} className="d-block w-100 h-auto" alt="..." />
                    <div className="carousel-caption text-left md:text-start bottom-80">
                        <h5 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 lg:mb-4 uppercase tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 text-white">
                            NEW COLLECTION
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act,<br />
                            but things on a small scale.
                        </p>
                        <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-4 py-2 rounded">
                            SHOP NOW
                        </a>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={img} className="d-block w-100 h-auto" alt="..." />
                    <div className="carousel-caption text-left md:text-start bottom-80">
                        <h5 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 lg:mb-4 uppercase tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 text-white">
                            NEW COLLECTION
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act,<br />
                            but things on a small scale.
                        </p>
                        <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-4 py-2 rounded">
                            SHOP NOW
                        </a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};


export default Carousel1;
