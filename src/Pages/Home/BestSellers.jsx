import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        // filter data to get status Sale only
        setProducts(data.filter((item) => item.best === true));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-10 flex flex-col gap-10 py-12">
      <div className="title flex flex-row gap-4 items-center">
        <span className="bg-red-500 w-6 h-12 rounded-md"></span>
        <h2 className="text-2xl font-bold text-red-500">This Month</h2>
      </div>

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl mb-4 capitalize md:text-5xl">
          best selling products
        </h1>
        <div className="flex justify-center my-5">
          <Link to={"/shop"}>
            <button className="btn bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-400 transition-all duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>

      <div className="items mt-4">
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
                  <Link to={`/shop/${item.id}`} key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                    />
                  </Link>

                  <div className="cart-btn">
                    <button className="w-full text-center py-3 bg-black text-white hover:bg-black/80">
                      Add To Cart
                    </button>
                  </div>

                  <div className="mt-4 ">
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
    </div>
  );
};

export default BestSellers;
