import Countdown from "react-countdown";

const BigSale = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span className="text-red-600">Flash sale is over!</span>;
    } else {
      // Render the countdown timer
      return (
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="flex flex-col items-center bg-white p-3 rounded-full md:p-5">
            <span className="text-3xl font-bold">{days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center bg-white p-3 rounded-full md:p-5">
            <span className="text-3xl font-bold">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-white p-3 rounded-full md:p-5">
            <span className="text-3xl font-bold">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center bg-white p-3 rounded-full md:p-5">
            <span className="text-3xl font-bold">{seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="bg-black px-24 py-12 flex flex-col lg:flex-row justify-between items-center my-12 gap-10 md:gap-0">
      <div className="text flex flex-col gap-10">
        <h1 className="text-lime-500 font-bold text-3xl">Categories</h1>
        <h1 className=" capitalize text-white font-bold text-5xl">
          enhance your music experience
        </h1>

        <div className="time flex flex-row">
          <div className="countDownTimer flex justify-center items-center">
            <Countdown date={new Date("2024-12-31")} renderer={renderer} />
          </div>
        </div>

        <button className="bg-lime-500 text-white font-bold px-8 w-32 py-4 rounded-lg hover:bg-lime-700">
          Buy Now
        </button>
      </div>
      <div className="img">
        <img src="../public/products/sale.png" alt="big sale" className="object-cover"/>
      </div>
    </div>
  );
};

export default BigSale;
