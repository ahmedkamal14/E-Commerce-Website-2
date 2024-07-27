import { BiSolidArrowToTop } from "react-icons/bi";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import BrowseCategory from "./BrowseCategory";
import BestSellers from "./BestSellers";
import BigSale from "./BigSale";
import ExploreProducts from "./ExploreProducts";
import Features from "./Features";

const Home = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8">
      <button
        className="fixed bottom-8 right-8 bg-red-500 text-white p-4 rounded-full text-2xl"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BiSolidArrowToTop />
      </button>
      <Categories />
      <FlashSale />
      <BrowseCategory />
      <BestSellers />
      <BigSale />
      <ExploreProducts />
      <Features />
    </div>
  );
};

export default Home;
