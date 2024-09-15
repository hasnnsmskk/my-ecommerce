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
        { id: 1, image: product1, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 2, image: product2, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 3, image: product3, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 4, image: product4, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 5, image: product5, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 6, image: product6, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 7, image: product7, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { id: 8, image: product8, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    ];

    return (
        <div className="text-center my-8">
            {/* Ürünler kısmı */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="flex flex-col items-center p-0 border border-gray-300 bg-white">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-80 object-cover"
                                style={{ margin: '0' }}
                            />
                            <div className="flex flex-col items-start p-2">
                                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                                <p className="text-gray-600 mb-2">{product.department}</p>
                                <div className="flex flex-row items-center justify-start gap-1">
                                    <p className="text-gray-500 line-through">{product.oldPrice}</p>
                                    <p className="text-green-500 font-bold">{product.newPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
