import React from 'react'
import resim from "../../assets/HomePageİmg/ressim.jpg";
import resimm from "../../assets/HomePageİmg/kadınn.jpg"
import img from "../../assets/HomePageİmg/orti.jpg"
function Carousel1() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide ">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner w-full h-[700px]">  {/* Carousel height tam ekran olarak ayarlandı */}
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={resimm} className="d-block w-full h-[700px] object-cover" alt="..." />
                    <div className="carousel-caption absolute text-center md:text-start bottom-52 
                    md:top-64 md:bottom-12 lg:bottom-48 md:right-auto">
                        <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 lg:mb-6  tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                            <span className="block md:inline">NEW </span>
                            <span className="block md:inline">COLLECTION</span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act,
                            <br />
                            but things on a small scale.
                        </p>

                        <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-3 py-2 md:px-4 md:py-2 rounded">
                            SHOP NOW
                        </a>
                    </div>



                </div>

                <div className="carousel-item active">
                    <img src={resim} className="d-block w-full h-[700px] object-cover" alt="..." />
                    <div className="carousel-caption absolute text-center md:text-start bottom-52 
                    md:top-64 md:bottom-12 lg:bottom-48 md:right-auto">
                        <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 lg:mb-6  tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                            <span className="block md:inline">NEW </span>
                            <span className="block md:inline">COLLECTION</span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act,
                            <br />
                            but things on a small scale.
                        </p>

                        <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-3 py-2 md:px-4 md:py-2 rounded">
                            SHOP NOW
                        </a>
                    </div>


                </div>

                <div className="carousel-item active">
                    <img src={img} className="d-block w-full h-[700px] object-cover" alt="..." />
                    <div className="carousel-caption absolute text-center md:text-start bottom-52 
                    md:top-64 md:bottom-12 lg:bottom-48 md:right-auto">
                        <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 lg:mb-6  tracking-wider text-white">
                            Summer 2024
                        </h5>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                            <span className="block md:inline">NEW </span>
                            <span className="block md:inline">COLLECTION</span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 text-white">
                            We know how large objects will act,
                            <br />
                            but things on a small scale.
                        </p>

                        <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-3 py-2 md:px-4 md:py-2 rounded">
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

    )
}

export default Carousel1