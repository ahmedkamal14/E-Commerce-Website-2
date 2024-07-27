import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../Components/Cards";

const Shop = () => {
  const [productsList, setProductsList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [itemsShown, setItemsShown] = useState(18);

  const filterData = (category) => {
    let tempData = [...productsList];
    if (category !== "all") {
      tempData = tempData.filter((item) => item.category === category);
    }
    setCurrentCategory(category);
    setFilteredData(tempData);
  };

  const handleSortingChange = (option) => {
    let tempData = [...filteredData];
    if (option === "A-Z") {
      tempData = tempData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "Z-A") {
      tempData = tempData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === "low-high") {
      tempData = tempData.sort((a, b) => a.newPrice - b.newPrice);
    } else if (option === "high-low") {
      tempData = tempData.sort((a, b) => b.newPrice - a.newPrice);
    }
    setFilteredData(tempData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();

        setProductsList(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1800px] mx-auto px-8 my-12 flex flex-col">
      <div className="nav mb-8">
        <p className="text-black/50">
          <Link to={"/"}>Home</Link> /{" "}
          <span className="text-black font-bold underline">Shop</span>
        </p>
      </div>

      <div className="flex items-center mt-8 flex-col md:flex-row md:justify-between">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button
            onClick={() => filterData("all")}
            className={currentCategory === "all" ? "link-active " : ""}
          >
            All Products
          </button>
          <button
            onClick={() => filterData("Home")}
            className={currentCategory === "Home" ? "link-active " : ""}
          >
            Home
          </button>
          <button
            onClick={() => filterData("Computers")}
            className={currentCategory === "Computers" ? "link-active " : ""}
          >
            Computers
          </button>
          <button
            onClick={() => filterData("Clothing")}
            className={currentCategory === "Clothing" ? "link-active " : ""}
          >
            Clothing
          </button>
          <button
            onClick={() => filterData("Pets")}
            className={currentCategory === "Pets" ? "link-active " : ""}
          >
            Pets
          </button>
          <button
            onClick={() => filterData("Toys")}
            className={currentCategory === "Toys" ? "link-active " : ""}
          >
            Toys
          </button>
        </div>

        {/* Filtering  */}
        <div className="bg-black text-white rounded-lg  px-4 py-2 flex justify-center items-center mt-5">
          <FaFilter className="me-3" />
          <select
            name="filtering-select"
            id="filter-select"
            className="bg-black text-white rounded-lg"
            onChange={(e) => handleSortingChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="Showing text-3xl font-semibold mt-8 capitalize">
        <h1>
          Showing <span className="text-red-500">{currentCategory}</span>{" "}
          Products.
        </h1>
      </div>

      <div className="my-10">
        <Cards prods={filteredData} maxPerPage={itemsShown} />
      </div>

      {itemsShown < filteredData.length && (
        <div className="flex justify-center mb-5">
          <button
            onClick={() => setItemsShown(itemsShown + 12)}
            className="btn bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-400 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
