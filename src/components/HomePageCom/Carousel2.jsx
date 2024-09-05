import React from 'react';
import carousel1 from "../../assets/HomePageİmg/carousel1.jpg";
import carousel2 from "../../assets/HomePageİmg/carousel2.jpg"
import carousel3 from "../../assets/HomePageİmg/carousel3.jpg"

const Carousel2 = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner w-full h-[550px] ">
                <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-100 " alt="..." />
                    <div className="carousel-caption text-left md:text-start bottom-44">
                        <h5 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 lg:mb-4 uppercase tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 text-white">
                            Vita Classic <br /> Product
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act, We know<br />
                            how are objects will act, We know
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                                $16.48
                            </span>
                            <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                ADD TO CART
                            </a>
                        </div>
                    </div>

                </div>
                <div className="carousel-item active">
                    <img src={carousel2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption text-left md:text-start bottom-44">
                        <h5 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 lg:mb-4 uppercase tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 text-white">
                            Vita Classic <br /> Product
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act, We know<br />
                            how are objects will act, We know
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                                $16.48
                            </span>
                            <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                ADD TO CART
                            </a>
                        </div>
                    </div>

                </div>

                <div className="carousel-item active">
                    <img src={carousel3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption text-left md:text-start bottom-44">
                        <h5 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 lg:mb-4 uppercase tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 text-white">
                            Vita Classic <br /> Product
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act, We know<br />
                            how are objects will act, We know
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                                $16.48
                            </span>
                            <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                ADD TO CART
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};


export default Carousel2;
