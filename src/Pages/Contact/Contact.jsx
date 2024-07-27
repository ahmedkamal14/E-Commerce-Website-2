import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8 my-12 flex flex-col">
      <div className="nav">
        <p className="text-black/50">
          <Link to={"/E-Commerce-Website-2/"}>Home</Link> /{" "}
          <span className="text-black font-bold underline">Contact</span>
        </p>
      </div>

      <div className="content mt-16 flex flex-col md:flex-row gap-10">
        <div className="info w-full md:w-[30%] p-5 md:p-10 rounded-md shadow-xl">
          <div className="call flex flex-col gap-6 mb-8">
            <div className="flex items-center">
              <img src="./call.png" alt="Call" className="me-3" />
              <h1>Call To Us</h1>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +20-1097150215</p>
          </div>
          <hr />
          <div className="write flex flex-col gap-6 mt-8">
            <div className="flex items-center">
              <img src="./mail.png" alt="Call" className="me-3" />
              <h1>Write To US</h1>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: ahmd675asd@gmail.com</p>
            <p>Emails: support@shopify.com</p>
          </div>
        </div>
        <div className="user-fields w-full md:w-[65%] p-10 rounded-md shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-8">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                id="name"
                className="p-3 bg-secondary1 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                className="p-3 bg-secondary1 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="tel"
                id="phone"
                className="p-3 bg-secondary1 rounded-md"
                placeholder="Your Phone"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              id="message"
              className="p-3 bg-secondary1 rounded-md h-[300px] mb-3"
              placeholder="Your Message"
            />

            <div className="flex justify-end">
              <button className="p-4 bg-red-500 rounded-md text-white mb-3 hover:bg-red-400">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
