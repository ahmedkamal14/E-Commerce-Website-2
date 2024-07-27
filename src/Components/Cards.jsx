import { useState, useContext } from "react";
import { CartContext } from "../Components/CartContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cards = (props) => {
  // State to keep track of the selected color for each product
  const [selectedColors, setSelectedColors] = useState({});

  // Use context to get cart items and set cart items functions
  const { cartItems, setCartItems } = useContext(CartContext);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const incrementItemQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementItemQuantity = (item) => {
    setCartItems(
      cartItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };

  const getCartItem = (itemId) => cartItems.find((item) => item.id === itemId);

  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-16 justify-center items-start">
      {props.prods.slice(0, props.maxPerPage).map((item) => {
        const cartItem = getCartItem(item.id);
        return (
          <div key={item.id}>
            <Link to={`/shop/${item.id}`} key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
              />
            </Link>

            <div className="cart-btn">
              {cartItem ? (
                <div className="flex items-center justify-between w-full bg-black text-white font-bold">
                  <button
                    className="text-center py-3 bg-black text-white hover:bg-black/80 px-2"
                    onClick={() => decrementItemQuantity(cartItem)}
                  >
                    -
                  </button>
                  <span className="px-4">{cartItem.quantity}</span>
                  <button
                    className="text-center py-3 bg-black text-white hover:bg-black/80 px-2"
                    onClick={() => incrementItemQuantity(cartItem)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="w-full text-center py-3 bg-black text-white hover:bg-black/80"
                  onClick={() => addItemToCart(item)}
                >
                  Add To Cart
                </button>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-base font-semibold my-2">{item.title}</h3>
              <div className="flex justify-between">
                <p className="text-black/50">{item.category}</p>
                <div className="prices flex gap-5">
                  {item.status === "Sale" ? (
                    <p className="text-black/50 line-through">
                      ${item.oldPrice}
                    </p>
                  ) : null}
                  <p className="text-red-600">${item.newPrice}</p>
                </div>
              </div>
            </div>

            <div className="available-colors">
              <div className="flex gap-2 mt-4">
                {item.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full border border-gray-200 cursor-pointer ${
                      selectedColors[item.id] === color
                        ? "ring-2 ring-black"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(item.id, color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Cards.propTypes = {
  prods: PropTypes.array.isRequired,
  maxPerPage: PropTypes.number,
};

export default Cards;
