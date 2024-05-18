
const Footer = () => {
    return (
        <footer className="bg-header border-t-2 border-gray-200">
        <div className=" text-black">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className=" w-56 flex flex-row items-center justify-center">
                <img src="/images/mixiM.png" className=" w-[90px] h-[90px] " alt="" />
                <span className="inline-block text-2xl border-b-4 border-blue-600"> MixiMeals</span>
                </a>
                <p className="pl-10">
                Looking to order delicious meals online? Look no further! Our platform offers a seamless experience for both food lovers and restaurants.
                </p>
              </div>
  
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
                </div>
                <ul className="leading-8">
                  <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400">Terms &amp; Conditions</a></li>
                  <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
                </div>
                <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">The Ultimate Guide to Ordering Food Online</a></li>
                <li><a href="#" className="hover:text-blue-400">How to Choose the Best Food Delivery Service?</a></li>
                <li><a href="#" className="hover:text-blue-400">Top 10 Must-Try Dishes from Online Food Delivery</a></li>
                <li><a href="#" className="hover:text-blue-400">Dining In vs. Ordering Out: Pros and Cons</a></li>
                <li><a href="#" className="hover:text-blue-400">See More</a></li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
                </div>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.831-46.457 57.828 21.843-2.274 42.308-8.122 61.15-16.243-14.293 21.843-32.161 41.336-52.3 57.177z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rostami-amin/" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                 <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1c-31.1 0-56.42-25.4-56.42-56.71C-2.63 25.4 22.29 0 53.79 0 85.67 0 111 25.4 111 51.4c0 31.1-25.4 56.71-57.21 56.71zm394.4 339.9h-92.89V312.25c0-32.6-11.65-54.9-40.78-54.9-22.2 0-35.5 14.9-41.3 29.3-2.2 5.3-2.8 12.6-2.8 19.9V448h-92.9s1.2-262.9 0-290.1h92.9v41.1c-0.2 0.3-0.4 0.5-0.5 0.8h0.5V199.6c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
               </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-600 py-4 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Copyright © 2024
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Made with ❤️ by <a href='https://www.linkedin.com/in/rostami-amin/' className='underline'>Amin Rostami.</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
