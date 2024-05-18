import Link from "next/link";
import { useState } from "react";
import Shopping from "@/public/Icon/Shopping";
import { useCart } from "@/Contexts/FoodContextProvider";

const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

    const [state] = useCart(); // Get cart state from context

    // Function to toggle the menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav className=" border-gray-200 py-2.5 fixed top-0 left-0 right-0 z-10 bg-header backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    <img src="/images/mixiM-large.png" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                    <span className="self-center font-medium whitespace-nowrap text-2xl">MixiMeals</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>
     <div className="relative ml-2 mr-6">
              <Link href='/ShoppingPage'>
              {/* <img src={shoppingCart} alt="Shopping Cart" className="h-10 w-10 cursor-pointer" /> */}
              <Shopping className="h-4 w-4"/>
              {state.itemsCounter > 0 && (
                <span className="absolute top-0 left-3 bg-blue-800 text-white rounded-full px-2 py-1 pl-2 text-xs">
                  {state.itemsCounter}
                </span>
              )}
              </Link>   
            </div>
                    {/* <a href="" className="text-white bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 :bg-purple-600 :hover:bg-purple-700 focus:outline-none :focus:ring-purple-800">Download</a> */}
                    <button onClick={toggleMenu}
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded={isMenuOpen ? "true" : "false"}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block lg:order-1 w-full lg:w-auto`} id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"  aria-current="page"> 
                           Home
                        </Link>
                        <Link href="/Foods" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700">
                            Foods
                        </Link>
                        <Link href="/Gallery" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700">
                             Gallery
                        </Link>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;