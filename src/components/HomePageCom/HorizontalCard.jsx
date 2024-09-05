import React from 'react'
import horizontal from "../../assets/HomePageİmg/horizontal.jpg"
function HorizontalCard() {
    return (
        <div>
            <div className="card mb-3 w-full h-[400px]" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={horizontal} className="img-fluid  w-full h-[400px]" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ml-80 mt-16 ">Summer 2024</h5>
                            <h2 className="card-text ml-80 mt-8 font-bold text-4xl">Part of the Neural <br /> Universe </h2>
                            <p className="card-text mt-8 ml-80 ">We know how large objects will act,<br />
                                but things on a small scale.</p>
                        </div>
                        <div className="flex items-center gap-4 ml-[336px]">
                            <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                BUY NOW
                            </a>
                            <a href="#" className="bg-white text-green-500 border border-green-500 text-xs md:text-sm lg:text-xs px-4 py-2 rounded">
                                READ MORE
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard