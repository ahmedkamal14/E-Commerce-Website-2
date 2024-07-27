import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8 flex items-center py-12 pe-12 lg;pe-32 justify-between gap-8">
      <div className="img hidden md:flex md:w-[60%]">
        <img src="../../public/signup.png" alt="fashion" />
      </div>
      <div className="form flex flex-col gap-2 w-full md:w-[35%] justify-center">
        <h1 className="text-3xl lg:text-5xl">Log In to Shopify</h1>
        <p className="text-lg lg:text-xl mb-8">Enter your details below</p>
        <form>
          <div className="form-group mb-8">
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="pb-2 border-b-2 border-black/20 w-full"
            />
          </div>
          <div className="form-group mb-8">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="pb-2 border-b-2 border-black/20 w-full"
            />
          </div>

          <div className="flex justify-between items-center ">
            <button className="w-1/3 py-4 bg-red-500 rounded-md text-white mb-3 hover:bg-red-400">
              Log IN
            </button>
            <button className="text-red-500 hover:text-red-400">
              Forgot Password ?
            </button>
          </div>

          <p className="text-black/50 w-full text-center py-8 font-bold">Or </p>

          <div className="w-full text-center">
            <Link
              to={"/signup"}
              className="text-red-500 font-bold text-xl underline"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
