const NewArrivals = () => {
  return (
    <div className="my-12 flex flex-col gap-10">
      <div className="title flex flex-row gap-4 items-center">
        <span className="bg-red-500 w-6 h-12 rounded-md"></span>
        <h2 className="text-2xl font-bold text-red-500 capitalize">featured</h2>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="text-3xl mb-4 capitalize md:text-5xl">new arrivals</h1>
      </div>

      <div className="images">
        <div className="w-1/2 h-[600px] bg-black text-white">
          <h1>PlayStation 5</h1>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <button>Shop Now</button>
          <img src="../../public/new/playstation.png" alt="playstation" />
        </div>
        <div className="w-1/2">
          <div className="women bg-black"></div>
          <div>
            <div className="speaker bg-black"></div>
            <div className="perfume bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
