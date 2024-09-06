import React from 'react'
import carousel1 from "../../assets/HomePageİmg/carousel1.jpg";
import carousel2 from "../../assets/HomePageİmg/carousel2.jpg"
import carousel3 from "../../assets/HomePageİmg/carousel3.jpg"
function Carousel2() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner w-full h-[700px]">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={carousel1} className="d-block w-full h-[700px] object-cover" alt="..." />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center bottom-52 md:bottom-12 lg:bottom-48">
                            <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3 uppercase tracking-wider text-white">
                                Summer 2024
                            </h5>
                            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                                Vita ClassNameic <br /> Product
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl mb-2 md:mb-6 lg:mb-8 text-white">
                                We know how large objects will act, We know<br />
                                how are objects will act, We know
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                                    $16.48
                                </span>
                                <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                    ADD TO CART
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={carousel2} className="d-block w-full h-[700px] object-cover" alt="..." />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center bottom-52 md:bottom-12 lg:bottom-48">
                            <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3 uppercase tracking-wider text-white">
                                Summer 2024
                            </h5>
                            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                                Vita ClassNameic <br /> Product
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl mb-2 md:mb-6 lg:mb-8 text-white">
                                We know how large objects will act, We know<br />
                                how are objects will act, We know
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                                    $16.48
                                </span>
                                <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                    ADD TO CART
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-full h-[700px] object-cover" alt="..." />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center bottom-52 md:bottom-12 lg:bottom-48">
                            <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3 uppercase tracking-wider text-white">
                                Summer 2024
                            </h5>
                            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                                Vita ClassNameic <br /> Product
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl mb-2 md:mb-6 lg:mb-8 text-white">
                                We know how large objects will act, We know<br />
                                how are objects will act, We know
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-4">
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



        </div >

    )
}

export default Carousel2