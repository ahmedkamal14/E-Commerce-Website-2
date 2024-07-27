const Announcment = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-3 flex flex-col md:flex-row justify-between items-center py-3">
        <div className="text flex flex-col md:flex-row ms-2 md:ms-64">
          <p className="text-white/80 me-3">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="underline hidden lg:block">ShopNow</button>
        </div>
        <select
          name="lang"
          id="lang"
          className="bg-black text-white/80  hidden lg:block"
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default Announcment;
