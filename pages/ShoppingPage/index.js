import React,{useState} from 'react';
import Swal from 'sweetalert2';

import { useCart } from '@/Contexts/FoodContextProvider';

const Index = () => {
  const [state, dispatch] = useCart(); 
// Destructure relevant properties from the selectedItems in the state
// const { image, title, price, quantity, id, name, details, discount, introduction, ingredients, recipe } = state.selectedItems;

// Shipping prices
const StandardShipping = 10.00;
const FastShipping = 20.00;

// State to keep track of the selected shipping option
const [shippingOption, setShippingOption] = useState('StandardShipping');

// Function to handle changes in the shipping option dropdown
const handleSelectChange = (event) => {
  setShippingOption(event.target.value);
};

// Function to handle the checkout process
const checkOutHandler = (type) => {
  // Dispatch the checkout action with the current state as payload
  dispatch({ type, payload: state });

  // If the checkout action type is "CHECKOUT", show a success alert using Swal
  if (type === "CHECKOUT") {
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Thanks for your purchase.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  }
};

  

    return (
        <div className="container mx-auto mt-10 bg-rose-100">
        <div className="lg:flex shadow-md my-10 ">
          <div className="w-full lg:w-3/4 px-10 py-10 bg-gray-100">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{state.selectedItems.length} Items</h2>
            </div>
            {!state.selectedItems.length?<p className="mt-4 text-gray-300 text-lg">go to store and find something</p>:state.selectedItems.map((item)=>(<Items item={item} key={item.id} state={state} dispatch={dispatch}/>))}
            <Link href="/Foods" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path
                  d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-full lg:w-1/4 px-8 py-10 h-full sticky top-10 ">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm" onChange={handleSelectChange}>
                <option value="StandardShipping">Standard shipping - ${StandardShipping}</option>
                <option value="FastShipping">Fast shipping - ${FastShipping}</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className='flex flex-col'>

              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total Items </span>
              <span>{state.total}$</span>
              </div>

              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>+ Shipping Price </span>
              <span>{shippingOption === 'StandardShipping' ? `${StandardShipping}$` : `${FastShipping}$`}</span>
              </div>
             
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost </span>
                <span>{(parseFloat(state.total) + (shippingOption === 'StandardShipping' ? StandardShipping : FastShipping)).toFixed(2)}$</span>
              </div>

              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={()=>checkOutHandler("CHECKOUT")}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
}

import Bin from '@/public/Icon/Bin';
import Time from '@/public/Icon/Time';
import Money from '@/public/Icon/Money';
import Link from 'next/link';

const Items=({item,dispatch})=>{
    const { image, title, price, quantity, id, name, details, discount, introduction, ingredients, recipe} = item;

    //   handle Products function
    const prodHandler = (type) => {
        dispatch({ type, payload: item });
      };


 return(
    <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t-2 border-gray-300">
    <div className="md:w-4/12 2xl:w-1/4 w-full">
      <img src={`/images/${id}.jpeg`} alt={name} className="h-full object-center object-cover md:block hidden" />
    </div>
    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{details[0].Cuisine}</p>

      <div className='flex flex-row items-center justify-between'>
      <div className="flex items-center justify-between w-full">
        <p className="text-base font-black leading-none text-gray-800">{name}</p>
      </div>
      <div className="flex flex-row md:justify-between items-center max-w-1/12 gap-4 justify-end m-auto sm:m-0">
        {quantity===1 &&  <button onClick={()=>prodHandler("REMOVE_ITEM")} >
            <div className='w-10 h-10 rounded-full bg-indigo-600 py-2 hover:bg-indigo-500 '>
            <Bin className=" w-6 h-6 m-auto"/>
            </div>
          </button>}
          {quantity>1 &&
         <button onClick={()=>prodHandler("DECREASE")} className="bg-indigo-600 text-white py-2 px-4 rounded-full w-10 h-10 font-bold hover:bg-indigo-500">
            -
         </button>}
         {quantity>0 && <span className='p-4 font-2xl font-bold'>{quantity}</span>}
          {quantity===0 ? <button onClick={()=>prodHandler("ADD_ITEM")} className="bg-indigo-600 text-white py-2 px-4 rounded-sm font-bold hover:bg-indigo-500">
            Add to Cart
          </button>:<button onClick={()=>prodHandler("INCREASE")} className="bg-indigo-600 text-white m-auto rounded-full w-10 h-10 font-bold hover:bg-indigo-500">
           +
          </button>}
          </div>
          </div>

          <div className='flex flex-row items-center'>
                 <Time className='w-6 h-6 pr-2 pt-1'/>
                <p>{details[4]['Cooking Time']}</p>
                </div>
                {/* handle the price */}
                {discount ? (
                            <div className='flex flex-row justify-between items-center w-28'>
                                 <div className='flex flex-row items-center '>
                                 <Money className="w-8 h-8 pr-2 pt-1"/>
                            <p className='line-through'>{price}$ </p>
                            </div>
                            <p> {(price * ((100 - discount) / 100)).toFixed(2)}$</p>
                            </div>
                        ) : (
                            <div className='flex flex-row items-center '>
                            <Money className="w-8 h-8 pr-2 pt-1"/>
                        <p>{price}$</p>   
                          </div>
                     )}
      <div className="flex items-center justify-between pt-5">
        <div className="flex items-center">
        </div>
        <p className="text-base font-black leading-none text-gray-800">Total: {discount ? ((price * (100 - discount) / 100)*quantity).toFixed(2) : (price * quantity).toFixed(2)}$</p>
      </div>
    </div>
  </div>
 )
}

export default Index;
