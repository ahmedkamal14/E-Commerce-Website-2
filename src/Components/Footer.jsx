import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleOpenInMaps = () => {
    // Specify the location you want to open in Google Maps
    const latitude = 37.7749; // Example latitude (San Francisco)
    const longitude = -122.4194; // Example longitude (San Francisco)
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Open the URL in a new tab
    window.open(googleMapsUrl, "_blank");
  };

  const handleOpenEmail = () => {
    // Specify the email address you want to set in the "to" field
    const email = "ahmd675asd@gmail.com";
    const mailtoUrl = `mailto:${email}`;

    // Open the email client with the specified email address
    window.location.href = mailtoUrl;
  };

  const handleCall = () => {
    // Specify the phone number you want to dial
    const phoneNumber = "+201097150215";
    const telUrl = `tel:${phoneNumber}`;

    // Open the phone dialer with the specified phone number
    window.location.href = telUrl;
  };

  return (
    <div className="bg-black text-white">
      <div className="max-w-[1800px] mx-auto px-8 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
        <div className="brand flex flex-col gap-3">
          <h1 className="text-4xl mb-3 font-bold">Shopify</h1>
          <h2 className="text-xl mb-2 font-semibold">Subscribe</h2>
          <p className="mb-3 font-semibold">Get 10% off your first order</p>
          <div className="flex items-center border-2 rounded-md px-4 py-3 justify-between">
            <input
              type="email"
              name="user-email"
              id="email"
              placeholder="enter your email"
              className="bg-black text-white focus:outline-none"
            />
            <LuSendHorizonal className="text-2xl hover:cursor-pointer" />
          </div>
        </div>
        <div className="support">
          <h2 className="text-2xl mb-3 font-semibold">Support</h2>
          <ul className="flex flex-col gap-3 items-start">
            <button onClick={handleOpenInMaps} className="hover:text-white/45">
              Our Location
            </button>
            <button onClick={handleOpenEmail} className="hover:text-white/45">
              ahmd675asd@gmail.com
            </button>
            <button onClick={handleCall} className="hover:text-white/45">
              +20-1097150215
            </button>
          </ul>
        </div>
        <div className="account">
          <h2 className="text-2xl mb-3 font-semibold">My Account</h2>
          <ul className="flex flex-col gap-3 items-start">
            <button className="hover:text-white/45">
              <Link to={"/myaccount"}>Account</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/register"}>Login / Register</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/cart"}>Cart</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/wishlist"}>Wishlist</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/"}>Shop</Link>
            </button>
          </ul>
        </div>
        <div className="quick-links">
          <h2 className="text-2xl mb-3 font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-3 items-start">
            <button className="hover:text-white/45">
              <Link to={"/privacy"}>Privacy Policy</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/termsofuse"}>Terms Of Use</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/faq"}>FAQ</Link>
            </button>
            <button className="hover:text-white/45">
              <Link to={"/contact"}>Contact</Link>
            </button>
          </ul>
        </div>
        <div className="app flex flex-col gap-5">
          <h2 className="text-2xl mb-3 font-semibold">Download Our App</h2>
          <p className="text-white/45 capitalize">
            save 3$ with App New User Only
          </p>
          <div className="flex gap-10">
            <img src="../public/Qr Code.png" alt="appstore" className="w-32" />
            <div className="flex flex-col gap-5">
              <Link className="hover:cursor-pointer">
                <img
                  src="../public/google-play.png"
                  alt="appstore"
                  className="w-32"
                />
              </Link>
              <Link className="hover:cursor-pointer">
                <img
                  src="../public/appstore.png"
                  alt="appstore"
                  className="w-32"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
