import { useState, useEffect, useContext } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CartContext } from "../../Components/CartContext";

const FlashSale = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        // filter data to get status Sale only
        setProducts(data.filter((item) => item.status === "Sale"));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Flash sale is over!</span>;
    } else {
      // Render the countdown timer
      return (
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      );
    }
  };

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const getItemCountInCart = (itemId) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);
    return existingItem ? existingItem.quantity : 0;
  };

  return (
    <div className="my-3 flex flex-col gap-10">
      <div className="title flex flex-row gap-4 items-center">
        <span className="bg-red-500 w-6 h-12 rounded-md"></span>
        <h2 className="text-2xl font-bold text-red-500">{"Today's"}</h2>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-5xl font-bold text-red-600 mb-4">Flash Sale</h3>
        <div className="countDownTimer flex justify-center items-center gap-2">
          <Countdown date={new Date("2024-12-31")} renderer={renderer} />
        </div>
      </div>

      <div className="items mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="mySwiper"
        >
          {products.length > 0 ? (
            products.slice(0, 10).map((item) => (
              <SwiperSlide key={item.id} className="mb-10">
                <div>
                  <Link
                    to={`/E-Commerce-Website-2/shop/${item.id}`}
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                    />
                  </Link>

                  <div className="cart-btn">
                    {getItemCountInCart(item.id) > 0 ? (
                      <div className="flex items-center justify-between bg-black text-white font-bold py-1">
                        <button
                          className="px-4 py-2 bg-black text-white"
                          onClick={() => removeItemFromCart(item)}
                        >
                          -
                        </button>
                        <span className="px-4">
                          {getItemCountInCart(item.id)}
                        </span>
                        <button
                          className="px-4 py-2 bg-black text-white"
                          onClick={() => addItemToCart(item)}
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
                    <h3 className="text-base font-semibold my-2">
                      {item.title}
                    </h3>
                    <div className="flex justify-between">
                      <p className="text-black/50">{item.category}</p>
                      {/* check status if sale make to p one for old price and for new else make only one */}
                      <div className="prices flex gap-5">
                        {item.status === "Sale" ? (
                          <p className="text-black/50 line-through">
                            ${item.oldPrice}
                          </p>
                        ) : null}
                        <p
                          className={
                            item.status === "Sale"
                              ? "text-red-600"
                              : "text-black"
                          }
                        >
                          ${item.newPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Swiper>
      </div>

      <div className="flex justify-center my-5">
        <Link to={"/E-Commerce-Website-2/shop"}>
          <button
            className="btn bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-400 transition-all duration-300"
            onClick={() => {
              console.log(cartItems);
            }}
          >
            View All Products
          </button>
        </Link>
      </div>

      <hr />
    </div>
  );
};

export default FlashSale;
