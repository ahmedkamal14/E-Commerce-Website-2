import Features from "../Home/Features";
import { CiShop } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { CiGift } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      id: 0,
      name: "Tom Cruise",
      pos: "Founder & Chairman",
      img: "../../public/team1.png",
    },
    {
      id: 1,
      name: "Emma Watson",
      pos: "Managing Director",
      img: "../../public/team2.png",
    },
    {
      id: 3,
      name: "Will Smith",
      pos: "Product Designer",
      img: "../../public/team3.png",
    },
    {
      id: 4,
      name: "Tom Cruise",
      pos: "Founder & Chairman",
      img: "../../public/team1.png",
    },
    {
      id: 5,
      name: "Emma Watson",
      pos: "Managing Director",
      img: "../../public/team2.png",
    },
    {
      id: 6,
      name: "Will Smith",
      pos: "Product Designer",
      img: "../../public/team3.png",
    },
  ];
  const feat = [
    {
      Number: "10.5k",
      title: "Sallers active our site",
      icon: <CiShop />,
    },
    {
      Number: "33k",
      title: "Mopnthly Produduct Sale",
      icon: <AiOutlineDollar />,
    },
    {
      Number: "45.5k",
      title: "Customer active in our site",
      icon: <CiGift />,
    },
    {
      Number: "25k",
      title: "Anual gross sale in our site",
      icon: <FaSackDollar />,
    },
  ];
  return (
    <div className="max-w-[1800px] mx-auto px-8 my-12 flex flex-col">
      <div className="nav">
        <p className="text-black/50">
          <Link to={"/E-Commerce-Website-2/"}>Home</Link> /{" "}
          <span className="text-black font-bold underline">About</span>
        </p>
      </div>

      <div className="content flex flex-col-reverse md:flex-row justify-between items-center mt-12 gap-8    ">
        <div className="text w-full md:w-[40%]">
          <h1 className="md:text-7xl text-5xl font-semibold mb-8">Our Story</h1>
          <p className="text-xl leading-8 mb-8">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-xl leading-8 mb-8">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="img mb-8">
          <img src="../../public/about.png" alt="Shopify" />
        </div>
      </div>

      <div className="numbers py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-center gap-8">
          {feat.map((f, i) => (
            <div
              className="flex flex-col items-center gap-4 border border-black rounded-md px-10 py-10 hover:bg-red-500 hover:text-white transition-all duration-300"
              key={i}
            >
              <div className="icon bg-black text-white p-5 rounded-full text-5xl">
                {f.icon}
              </div>
              <h2 className="text-4xl font-bold">{f.Number}</h2>
              <p className="text-xl ">{f.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ourTeam my-8">
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
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {team.map((t, i) => (
            <SwiperSlide key={i} className="mb-10">
              <div className="team-card flex flex-col items-center gap-4">
                <img src={t.img} alt={t.name} />
                <h2 className="text-2xl font-bold">{t.name}</h2>
                <p className="text-lg">{t.pos}</p>
                <div className="socials flex gap-10 mb-3">
                  <CiTwitter className="text-2xl" />
                  <FaInstagram className="text-2xl" />
                  <FaLinkedinIn className="text-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Features />
    </div>
  );
};

export default About;
