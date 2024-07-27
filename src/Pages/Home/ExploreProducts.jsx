import { useState, useEffect } from "react";
import Cards from "../../Components/Cards";
import { Link } from "react-router-dom";
const ExploreProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-12 flex flex-col gap-10">
      <div className="title flex flex-row gap-4 items-center">
        <span className="bg-red-500 w-6 h-12 rounded-md"></span>
        <h2 className="text-2xl font-bold text-red-500 capitalize">
          our products
        </h2>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="text-3xl mb-4 capitalize md:text-5xl">
          explore our products
        </h1>
      </div>

      <div className="mt-10">
        <Cards prods={products} maxPerPage={12} />
      </div>

      <div className="flex justify-center mb-5">
        <Link to={"/shop"}>
          <button className="btn bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-400 transition-all duration-300">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreProducts;
