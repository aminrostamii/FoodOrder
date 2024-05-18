import React, { useState } from 'react';
import FoodCard from '../Modules/FoodCard';
import Category from '../Modules/Category';
import Link from 'next/link';

const MenuPage = ({ data }) => {
  // Initialize state to store all food items
  const [allFood, setAllFood] = useState(data);

  return (
    <div className='flex xl:flex-row flex-col-reverse w-full relative min-h-screen'>
      {/* Main content area for the menu */}
      <div className='xl:w-10/12 w-full'>
        {/* Page title */}
        <h1 className='font-bold pl-40 mt-20 text-2xl'>
          Menu
          {/* Subtitle or additional description */}
          <span className="text-sm font-semibold rounded-full text-blueGray-500"> MixiMeals</span>
        </h1>
        
        {/* Container for food items */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          {/* Grid layout for food cards */}
          
           {/* Check if allFood array has elements. If true, map through the array to display each food item using the FoodCard component. If false, render nothing. */}
           {allFood.length ? (
      <div className="grid grid-cols-1 flex-row sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {allFood.map((food) => (
          <FoodCard key={food.id} data={food} />
        ))}
      </div>
    ) : (
      <div className="flex items-center justify-center mt-30">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <img className='w-60 h-40 m-auto' src="/images/banner.png" alt="food" />
          <p className="mt-2 text-gray-600">Sorry, the food you are looking for does not exist.</p>
          <Link href="/Foods" className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
              Continue Shopping
          </Link>
        </div>
      </div>
    )}
        </div>
      </div>
      {/* Sidebar for sorting and other controls */}
      <div className='xl:w-2/12 w-full'>
        {/* Category component to handle sorting of food items */}
        <Category setAllFood={setAllFood} allFood={allFood} data={data} />
      </div>
    </div>
  );
};

export default MenuPage;
