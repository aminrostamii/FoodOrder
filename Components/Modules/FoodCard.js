import Link from 'next/link';
import Money from '@/public/Icon/Money';
import Time from '@/public/Icon/Time';
import Bin from '@/public/Icon/Bin';

import { useCart } from '@/Contexts/FoodContextProvider';


const FoodCard = ({ data }) => {
   // Destructuring product data 
const { id, name, price, discount, introduction, details, ingredients, recipe } = data;

// Accessing state and dispatch function from cart context
const [state, dispatch] = useCart();

// Function to get the quantity of a specific product in the cart
const productQuantity = (cart, productId) => {
  // Find the product in the cart's selected items by matching the product ID
  const product = cart.selectedItems.find(item => item.id === productId);
  // Return the quantity if the product is found, otherwise return 0
  return product ? product.quantity : 0;
};

// Get the quantity of the current product in the cart
const quantity = productQuantity(state, id);

// Function to handle adding or removing products from the cart
const prodHandler = (type) => {
  // Dispatch an action to the cart context with the type (ADD or REMOVE) and the product data as payload
  dispatch({ type, payload: data });
};

    return (
      <>
        {/* CARD 1 */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
                <img className="w-full"
                    src={`/images/${id}.jpeg`}
                    alt="Sunset in the mountains" />
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            {discount?
            <a href="#!">
                <div
                    className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 transition duration-500 ease-in-out">
                  - {discount}%
                </div>
            </a>:<></>}
            </div>
            <div className="px-6 py-4 mb-auto flex flex-row justify-between">
            <a href="#"
                className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{name}</a>
                   <div className='flex flex-row justify-center items-center'>
                    <img src="/location.svg" className='h-6 w-6 pr-1' alt="" />
            <p className="text-gray-500 text-sm">
              {details[0].Cuisine}
            </p>
            </div>
            </div>
            <div className='flex flex-col p-4'>
                <div className='flex flex-row items-center'>
                 <Time className='w-6 h-6 pr-2 pt-1'/>
                <p>{details[4]['Cooking Time']}</p>
                </div>
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
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <div className='flex flex-row w-auto items-center'>
              {/* handle Buttons */}
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
          {/* end */}
          </div>
                 <button className='border-2 border-gray-300 p-2 hover:bg-gray-200'><Link href={`/Foods/${id}`}>View details</Link></button>
            </div>
        </div>
        </>
    );
}

export default FoodCard;
