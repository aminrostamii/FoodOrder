import React from 'react';
import Fast from '../icons/Fast';
import Economic from '../icons/Economic';
import Choice from '../icons/Choice';
import Support from '../icons/Support';

const WhyUs = () => {
    return (
        <section className="text-gray-700 body-font max-w-[1100px] m-auto ">
      <div className="container px-5 py-16 mx-auto ">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
            <div className="border-2 border-gray-200 flex flex-col items-center justify-center bg-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
               <Fast/>
              <h2 className="title-font font-medium text-xl pt-4 text-gray-900">Fast</h2>
            </div>
          </div>
          {/* Repeat the above div structure for each statistic */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 flex flex-col items-center justify-center bg-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
             <Economic className="w-12 h-12"/>
              <h2 className="title-font font-medium text-xl pt-4 text-gray-900">Economic</h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 flex flex-col items-center justify-center bg-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
             <Choice/>
              <h2 className="title-font font-medium text-xl text-gray-900 pt-4">Your Choices</h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 bg-white flex flex-col items-center justify-center px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Support className="w-12 h-12"/>
              <h2 className="title-font font-medium text-xl text-gray-900 pt-4">24/7</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default WhyUs;
