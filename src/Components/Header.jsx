import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CartContext } from "../Components/CartContext";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useContext(CartContext);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleActiveLink = (path) => {
    setActiveLink(path);
  };

  // Calculate total items in the cart
  const totalItemsInCart = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div>
      <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between pt-10 pb-5">
        <div className="main-title">
          <Link to={"/E-Commerce-Website-2/"}>
            <h1 className="font-semibold text-4xl">Shopify</h1>
          </Link>
        </div>
        <div className="links flex-col md:flex-row justify-between items-center gap-8 hidden md:flex">
          <Link
            to="/E-Commerce-Website-2/"
            className={
              activeLink === "/E-Commerce-Website-2/"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/")}
          >
            <h2>Home</h2>
          </Link>
          <Link
            to="/E-Commerce-Website-2/contact"
            className={
              activeLink === "/E-Commerce-Website-2/contact"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/contact")}
          >
            <h2>Contact</h2>
          </Link>
          <Link
            to="/E-Commerce-Website-2/about"
            className={
              activeLink === "/E-Commerce-Website-2/about"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/about")}
          >
            <h2>About</h2>
          </Link>
          <Link
            to="/E-Commerce-Website-2/signup"
            className={
              activeLink === "/E-Commerce-Website-2/signup"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/signup")}
          >
            <h2>Sign Up</h2>
          </Link>
        </div>
        <div className="user-related hidden md:flex">
          {/* Search input field  */}
          <div className="search-bar me-6 bg-secondary1 px-4 py-4 flex items-center justify-center rounded-md">
            <input
              type="text"
              placeholder="What Are You Looking For"
              className="bg-secondary1 me-3 focus:outline-none"
            />
            <button>
              <FaSearch className="text-2xl" />
            </button>
          </div>

          {/* Favourites and Cart */}
          <div className="fav-cart hidden lg:flex items-center justify-center text-2xl relative">
            <button className="me-3">
              <Link to={"/E-Commerce-Website-2/signup"}>
                <FaRegUser className="hover:text-orange-500" />
              </Link>
            </button>
            <button className="relative">
              <Link to={"/E-Commerce-Website-2/cart"}>
                <BsCart3 className="hover:text-orange-500" />
                {totalItemsInCart > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItemsInCart}
                  </div>
                )}
              </Link>
            </button>
          </div>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger-menu md:hidden">
          <button onClick={toggleMenuOpen}>
            {isMenuOpen ? (
              <FaTimes className="text-black w-5 h-5" />
            ) : (
              <FaBars className="text-black w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <hr />
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="links flex flex-col items-center justify-between gap-4 mt-3 bg-secondary1 rounded-xl py-2">
          <Link
            to="/E-Commerce-Website-2/"
            className={
              activeLink === "/E-Commerce-Website-2/"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/")}
          >
            <h2>Home</h2>
          </Link>
          <Link
            to="/E-Commerce-Website-2/contact"
            className={
              activeLink === "/E-Commerce-Website-2/contact"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/contact")}
          >
            <h2>Contact</h2>
          </Link>
          <Link
            to="/E-Commerce-Website-2/about"
            className={
              activeLink === "/E-Commerce-Website-2/about"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/about")}
          >
            <h2>About</h2>
          </Link>
          <Link
            to="/E-Commerce-Website-2/signup"
            className={
              activeLink === "/E-Commerce-Website-2/signup"
                ? "link-active"
                : "hover:underline"
            }
            onClick={() => handleActiveLink("/E-Commerce-Website-2/signup")}
          >
            <h2>Sign Up</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
