import { useState, useEffect } from "react";

const Category = ({ allFood, setAllFood, data }) => {


  const [sortCriteria, setSortCriteria] = useState({
    price: false,
    discount: false,
    cookingTime: false,
  });


  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setAllFood(data)
    setSearchQuery(e.target.value);
    setSortCriteria({
      price: false,
      discount: false,
      cookingTime: false,
    })
  };

  const searchHandler=()=>{

      const filteredFood = data.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAllFood(filteredFood);
  }

  const [originalFood, setOriginalFood] = useState([...allFood]);

  // useEffect(() => {
  //   setOriginalFood([...data]);
  // }, [allFood]);

  const handleSortChange = (e) => {
    setSearchQuery("")
    const { name, checked } = e.target;
    setSortCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const sortFood = () => {
      let sortedFood = [...data];

      if (!sortCriteria.price && !sortCriteria.discount) {
        setAllFood(data);
        return;
      }

      if (sortCriteria.price && !sortCriteria.discount) {
        sortedFood = [...data];
        sortedFood.sort((a, b) => a.price - b.price);
      }

      if (sortCriteria.discount && !sortCriteria.price) {
        sortedFood = [...data];
        sortedFood = sortedFood.filter(food => food.discount > 0);
      }

      if (sortCriteria.discount && sortCriteria.price) {
        sortedFood = sortedFood.filter(food => food.discount > 0);
        sortedFood.sort((a, b) => a.price - b.price);
      }

      setAllFood(sortedFood);
    };

    // console.log("Sort Criteria:", sortCriteria);
    // console.log("All Food Before Sort:", originalFood);
    // console.log("Data:", data);

    sortFood();
  }, [sortCriteria, setAllFood, data]);

  return (
    // <div className="fixed top-40 right-0 w-2/12 p-5 max-h-[calc(300vh-20px)] overflow-auto">
    <ul className="flex flex-col gap-2 xl:max-w-[280px] mx-auto w-full p-5 xl:pt-0 pt-20 sticky mt-30 top-40 right-0 mr-4">
      <li className="border-2 border-gray-400 rounded-md flex flex-row justify-between items-center">
        <p className="p-2 font-semibold">Food Quantity:</p>
        <span className="p-2">{allFood.length}</span>
      </li>
      <li className="border-2 border-gray-400 rounded-md">
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer m-2">
            <span className="flex gap-2">
              <span>Search Food</span>
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </summary>
          <article className="m-2">
          <div className="relative">
          <input className="appearance-none border-2 pl-10 border-gray-500 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
           placeholder="Search..."
           value={searchQuery}
           onChange={handleSearchChange}
           onKeyDown={(e) => {
           if (e.key === "Enter") {
               searchHandler();
               }}}
            />
      <div className="absolute right-0 inset-y-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="absolute left-0 inset-y-0 flex items-center" onClick={searchHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
          </article>
        </details>
      </li>
      <li className="border-2 border-gray-400 rounded-md">
        <details className="group" open>
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              <span>Sort By</span>
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </summary>
          <article className="flex flex-col items-start justify-start gap-1 m-2">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="w-4 h-4"
                name="price"
                checked={sortCriteria.price}
                onChange={handleSortChange}
              />
              <label className="pl-2 font-medium">Price</label>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="w-4 h-4"
                name="discount"
                checked={sortCriteria.discount}
                onChange={handleSortChange}
              />
              <label className="pl-2 font-medium">Discount</label>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="w-4 h-4"
                name="cookingTime"
                checked={sortCriteria.cookingTime}
                onChange={handleSortChange}
              />
              <label className="pl-2 font-medium">Cooking Time</label>
            </div>
          </article>
        </details>
      </li>
    </ul>
    // </div>
  );
};

export default Category;
