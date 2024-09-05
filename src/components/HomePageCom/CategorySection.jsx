import React from 'react';
import man from "../../assets/HomePageİmg/man.jpg";
import women from "../../assets/HomePageİmg/women.jpg";
import accessories from "../../assets/HomePageİmg/accessories.jpg";
import kids from "../../assets/HomePageİmg/kids.jpg";

const CategorySection = () => {
  return (
    <div className="text-center my-28">
      <h2 className="text-2xl font-bold">EDITOR'S PICK</h2>
      <p className="text-gray-500">Problems trying to resolve the conflict between</p>

      <div className="flex justify-around text-center mt-14  ml-64 ">
        <div className="relative">
          <img src={man} alt="Men" className="w-[380px] h-[450px] " />
          <button className="absolute bottom-2 left-24 transform -translate-x-1/2 bg-white px-4 py-2">MEN</button>
        </div>
        <div className="relative left-5">
          <img src={women} alt="Women" className="w-[280px] h-[450px]" />
          <button className="absolute bottom-2 left-24 transform -translate-x-1/2 bg-white px-4 py-2">WOMEN</button>
        </div>
        <div className="relative left-10">
          <img src={accessories} alt="Accessories" className="w-[280px] h-[215px]" />
          <button className="absolute bottom-64 left-24 transform -translate-x-1/2 bg-white px-4 py-2">ACCESSORIES</button>
        </div>
        <div className="relative top-60 right-[250px]">
          <img src={kids} alt="Kids" className="w-[280px] h-[210px]" />
          <button className="absolute bottom-64 left-[65px] transform -translate-x-1/2 bg-white px-4 py-2">KIDS</button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

