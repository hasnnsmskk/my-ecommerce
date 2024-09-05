import React from 'react'
import "../../css/Header.css"
function Header() {
    return (
        <div>

            <div>
                <p className='h1 text-xl font-semibold'>Moda Benim</p>
            </div>
            <div className='nav '>
                <nav className="hidden md:flex space-x-4">
                    <a href="/" className="home">Home</a>
                    <a href="/products" className="shop">Shop</a>
                    <a href="/about" className="about">About</a>
                    <a href="/blog" className="blog">Blog</a>
                    <a href="/contact" className="contact">Contact</a>
                    <a href="/pages" className="pages">Pages</a>
                </nav>
            </div>
            <div >
                <nav className=" fixed right-4 flex items-center space-x-4 ">

                    <a href="/profile" className="text-blue-500 hover:text-blue-700">
                        <i className="fa-regular fa-user text-blue-500"></i>
                    </a>

                    <a href="/login" className="text-blue-500 hover:text-blue-700">
                        Login/Register
                    </a>

                    <a href="/search" className="text-blue-500 hover:text-blue-700">
                        <i className="fa-solid fa-magnifying-glass text-blue-500"></i>
                    </a>

                    <a href="/cart" className="text-blue-500 hover:text-blue-700">
                        <i className="fa-solid fa-cart-shopping text-blue-500"></i>
                    </a>

                    <a href="/favorites" className="text-blue-500 hover:text-blue-700">
                        <i className="fa-regular fa-heart text-blue-500"></i>
                    </a>
                </nav>
            </div>
        </div>

    )
}

export default Header