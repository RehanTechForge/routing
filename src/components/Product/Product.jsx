import React, { useState } from "react";
import { useEffect } from "react";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const showCategories = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  };

  useEffect(() => {
    showCategories();
  }, []);
  return (
    <>
      <div className="w-[500px] mx-auto my-5">
        <form action="" className="flex gap-5">
          <input
            type="text"
            placeholder="Search Your Products"
            className="w-[85%] px-2 py-2 font-mono border border-slate-300 hover:border-slate-400 rounded focus-visible:border-slate-300 focus-visible:border focus-within:border-slate-300 focus-within:border focus:border-slate-300 focus:border focus-within:outline-none"
          />
          <button className="w-[15%] bg-orange-400 p-2 rounded">Search</button>
        </form>
      </div>
      <div className="grid grid-cols-[250px,1fr] px-10">
        <div className="bg-stone-200 rounded-md p-5 mb-5">
          <ul className="flex flex-col justify-center text-xl ">
            {categories.map((category) => (
              <li className="mb-3 font-mono hover:text-orange-400 cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>2</div>
      </div>
    </>
  );
};

export default Product;
