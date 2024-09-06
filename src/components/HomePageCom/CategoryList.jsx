import React from 'react';
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

    return (
        <div className="text-center my-8">
            <h5 className="text-gray-500  mb-4">Featured Products</h5>
            <h2 className="text-2xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-500 mb-10">Problems trying to resolve the conflict between</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-20 lg:mx-72 w-3/5">
                {products.map(product => (
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
        </div>
    );
};

export default CategoryList;
