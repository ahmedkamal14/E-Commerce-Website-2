import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8 my-12 flex flex-col">
      <div className="nav">
        <p className="text-black/50">
          <Link to={"/"}>Home</Link> /{" "}
          <span className="text-black font-bold underline">Cart</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center my-12">
          Your Cart is Empty
        </h1>
        <Link
          to={"/shop"}
          className="text-center py-3 px-8 bg-black text-white"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
