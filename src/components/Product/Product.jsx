import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const showCategories = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  };

  const getAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  };

  const getCategoryData = (category) => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  };

  const getSearchProductData = () => {
    fetch(`https://dummyjson.com/products/search?q=${searchProduct}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  };

  useEffect(() => {
    showCategories();
    getAllProducts();
  }, []);
  return (
    <>
      <div className="w-[500px] mx-auto my-5">
        <input
          onChange={(e) => setSearchProduct(e.target.value)}
          value={searchProduct}
          type="text"
          placeholder="Search Your Products"
          className="w-[85%] px-2 py-2 font-mono border border-slate-300 hover:border-slate-400 rounded focus-visible:border-slate-300 focus-visible:border focus-within:border-slate-300 focus-within:border focus:border-slate-300 focus:border focus-within:outline-none"
        />
        <button
          className="w-[15%] bg-orange-400 p-2 rounded"
          onClick={getSearchProductData}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-[200px,1fr] px-10">
        <div className="bg-stone-200 rounded-md p-5 mb-5">
          <ul className="flex flex-col justify-center text-xl ">
            {categories.map((category) => (
              <li
                className="mb-3 font-mono hover:text-orange-400 cursor-pointer"
                onClick={(e) => getCategoryData(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-5 ml-2">
          {products.length === 0 ? (
            <div className="w-[80%] mx-auto absolute">
              <h1 className="text-center text-3xl">No Data Found!</h1>
            </div>
          ) : (
            products.map((product) => (
              <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-[350px] h-[200px] object-cover"
                    src={product.thumbnail}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{product.title}</div>
                    <p class="text-gray-700 text-base">{product.description}</p>
                  </div>
                  <div class="px-6 pt-4 pb-2 w-[50%] mx-auto">
                    <Link to="/productsdetails" index={product.id}>
                      <span
                        onClick={(e) => console.log(product.id)}
                        class="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div class="flex w-[50%] mx-auto justify-center">
        {/* <!-- Previous Button --> */}
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </a>

        {/* <!-- Next Button --> */}
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </div>
    </>
  );
};

export default Product;
