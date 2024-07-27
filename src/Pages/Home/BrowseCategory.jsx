import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { IoWatchOutline } from "react-icons/io5";
import { PiHeadphonesThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { Pagination } from "swiper/modules";

const BrowseCategory = () => {
  const categories = [
    {
      title: "Phones",
      icon: <CiMobile3 />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Computers",
      icon: <MdOutlineComputer />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Camera",
      icon: <IoCameraOutline />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Smart Watch",
      icon: <IoWatchOutline />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Headphone",
      icon: <PiHeadphonesThin />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Gaming",
      icon: <IoGameControllerOutline />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Phones",
      icon: <CiMobile3 />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Computers",
      icon: <MdOutlineComputer />,
      link: "/E-Commerce-Website-2/shop",
    },
    {
      title: "Camera",
      icon: <IoCameraOutline />,
      link: "/E-Commerce-Website-2/shop",
    },
  ];

  return (
    <div className="my-3 flex flex-col gap-10 py-12">
      <div className="title flex flex-row gap-4 items-center">
        <span className="bg-red-500 w-6 h-12 rounded-md"></span>
        <h2 className="text-2xl font-bold text-red-500">Categories</h2>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="text-3xl mb-4 capitalize md:text-5xl">
          Browse by category
        </h1>
      </div>

      <div className="items mb-16">
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
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="mb-12">
              <Link
                to={`${category.link}`}
                className="flex flex-col items-center justify-start border pb-10 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <div className="w-28 h-28 flex items-center justify-center text-5xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl -m-3">{category.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <hr />
    </div>
  );
};

export default BrowseCategory;
