import Money from '@/public/Icon/Money';
import React from 'react';
import Link from 'next/link';

const DetailsPage = (props) => {
   // Destructuring product data 
    const { id, name, price, discount, introduction, details, ingredients, recipe } = props;

    return (
        <div className="w-full h-full">
        <div className="container mx-auto p-4 max-w-[1100px] min-h-[649px]">
            <div className="bg-gray-100 flex lg:flex-row flex-col rounded-lg shadow-lg items-center overflow-hidden lg:flex">
           
            <div className="relative bg-gray-100 mt-10 flex xl:flex-row flex-col rounded-lg shadow-lg items-center overflow-hidden lg:flex">
                 <img src={`/images/${id}.jpeg`} alt={name} className="w-full h-full max-w-[600px] rounded-lg m-auto object-cover" />
                 {discount?
            <a href="#!">
                <div
                    className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 transition duration-500 ease-in-out">
                  - {discount}%
                </div>
            </a>:<></>}
         </div>

                <div className="p-6">
                     <div className="px-6 py-4 mb-auto flex flex-row justify-between items-center w-[400px] pt-20">
            <p
                className="font-medium text-lg  hover:text-indigo-500 text-indigo-600 transition duration-500 ease-in-out inline-block">{name}</p>
                   <div className='flex flex-row justify-center items-center'>
                    <img src="/location.svg" className='h-6 w-6 pr-1' alt=""/>
            <p className="text-gray-500 text-sm">
              {details[0].Cuisine}
            </p>
            </div>
            </div>
            <div className='px-6 py-4 mb-auto flex flex-row justify-between items-center w-[400px]'>
          <p className="text-gray-800 font-medium text-sm">Recipe Main: {details[1]['Recipe Type']}</p>
          <p className="text-gray-600 pl-7 ">Difficulty : {details[2].Difficulty}</p>
            </div>
                    <div className="flex items-center mt-4">
                        <div className="flex flex-row">
                        {discount ? (
                            <div className='flex flex-row justify-between items-center w-40 px-6 '>
                                <div className='flex flex-row items-center'>
                                <Money className='w-8 h-8 pr-2 pt-1'/>
                                 <p className='line-through'>{price}$</p>
                                </div>
                            <p>{(price * (100-discount))/100}$</p>
                            </div>
                        ) : (
                        <p>{price}$</p>
                     )}
                        <span className="text-gray-600 ml-2 pt-1">{}</span>
                        </div>
                    </div>
                    <div className="mt-4 max-w-[400px] text-gray-600 font-medium">
                     {introduction}
                    </div>
                    <Link href="/Foods" className="flex font-semibold text-indigo-600 text-sm mt-10 items-end justify-end">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path
                  d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
                </div>
            </div>

        <div className='h-[1px] b-3 w-11/12 bg-gray-400 m-auto'></div>

            <div className=" w-full flex flex-col bg-gray-100 lg:flex-row">
      <div className="text-xl xl:w-4/12 w-full  border-black rounded-lg px-4 py-2 flex flex-col xl:items-start lg:items-start md:items-center">
        <p className="px-1 font-semibold mb-3 text-indigo-600">ingredients</p>
        <div className="flex flex-col gap-2 text-base text-indigo-600">
               {ingredients.map((ingredient, index) => (
                         <p key={index}>{ingredient}</p>
                         ))}
        </div>
      </div>
      <div className=' xl:w-8/12 w-full px-6 py-2 font-medium text-gray-600 xl:items-start lg:items-start md:m-auto'>
          <p>
            <span className='font-bold text-black'>Recipe:</span>
            <br/>
            {recipe}</p>
      </div>
    </div>

        </div>
        </div>
    );
}

export default DetailsPage;
