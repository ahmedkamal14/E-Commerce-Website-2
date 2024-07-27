import { Link } from "react-router-dom";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Categories = () => {
  const categoryRef = useRef(null);

  const adds = [
    {
      id: 1,
      title: "Iphone Add",
      image: "../../public/adds/add.png",
    },
    {
      id: 2,
      title: "Iphone Add",
      image: "../../public/adds/add.png",
    },
    {
      id: 3,
      title: "Iphone Add",
      image: "../../public/adds/add.png",
    },
  ];

  return (
    <div className="hidden md:flex flex-row justify-between items-center gap-10 pt-4 pb-10">
      <div
        className="categories py-12 flex justify-between w-[15%]"
        ref={categoryRef}
      >
        <div className="menu w-48 font-semibold text-xl">
          <div className="category flex justify-between items-center py-2 mb-2 hover:text-black/60">
            <span>{"Woman's Fashion"}</span>
            <IoIosArrowForward />
          </div>
          <div className="category flex justify-between items-center py-2 mb-2 hover:text-black/60">
            <span>{"Men's Fashion"}</span>
            <IoIosArrowForward />
            <span className="arrow transition-transform duration-300"></span>
          </div>
          <div className="category py-2 mb-2 hover:text-black/60">
            <Link>Electronics</Link>
          </div>
          <div className="category py-2 mb-2 hover:text-black/60">
            <Link>Home & Lifestyle</Link>
          </div>
          <div className="category py-2 mb-2 hover:text-black/60">
            <Link>Medicine</Link>
          </div>
          <div className="category py-2 mb-2 capitalize hover:text-black/60">
            <Link>sport & outdoor</Link>
          </div>
          <div className="category py-2 mb-2 capitalize hover:text-black/60">
            <Link>{"baby's & toys"}</Link>
          </div>
          <div className="category py-2 mb-2 capitalize hover:text-black/60">
            <Link>groceries & pets</Link>
          </div>
          <div className="category py-2 mb-2 capitalize hover:text-black/60">
            <Link>health & beauty</Link>
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ height: "70%" }}
        >
          {adds.map((adds) => (
            <SwiperSlide
              key={adds.id}
              className="flex flex-col items-center justify-center"
            >
              <Link to={`/shop/${adds.id}`} key={adds.id}>
                <img
                  src={adds.image}
                  alt={adds.title}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
