import React, { useState } from 'react';
import product1 from '../../assets/HomePageİmg/a.jpg';
import product2 from '../../assets/HomePageİmg/b.jpg';
import product3 from '../../assets/HomePageİmg/c.jpg';
import product4 from '../../assets/HomePageİmg/d.jpg';
import product5 from '../../assets/HomePageİmg/e.jpg';
import product6 from '../../assets/HomePageİmg/f.jpg';
import product7 from '../../assets/HomePageİmg/g.jpg';
import product8 from '../../assets/HomePageİmg/h.jpg';

const CategoryList = () => {
    const products = [
        { id: 1, image: product1, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 2, image: product2, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 3, image: product3, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 4, image: product4, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 5, image: product5, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 6, image: product6, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 7, image: product7, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
        { id: 8, image: product8, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', colors: ['red', 'orange', 'green', 'blue', 'purple'] },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Sayfalama işlemi
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="text-center my-8">
            {/* Ürünler kısmı */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4s xl:grid-cols-4 gap-4 mx-4 lg:mx-10">
                {currentItems.map(product => (
                    <div key={product.id} className="flex flex-col items-center p-2">
                        <img src={product.image} alt={product.title} className="w-full h-auto mb-4 object-cover" />
                        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                        <p className="text-gray-600 mb-2">{product.department}</p>
                        <div className="flex justify-center items-center mb-2">
                            {product.colors.slice(0, 5).map((color, index) => (
                                <span key={index} className={`w-4 h-4 rounded-full bg-${color}-500 mx-1`} />
                            ))}
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="text-gray-500 line-through">{product.oldPrice}</p>
                            <p className="text-green-500 font-bold">{product.newPrice}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sayfa numaralandırma */}
            <div className="flex justify-center items-center mt-6">
                <button
                    onClick={() => handlePageClick(1)}
                    className={`px-3 py-2 mx-0 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500'} border border-gray-300 rounded-l`}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageClick(page + 1)}
                        className={`px-3 py-2 mx-0 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'text-blue-500'} border border-gray-300`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    className={`px-3 py-2 mx-0 text-blue-500 border border-gray-300 rounded-r`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CategoryList;
