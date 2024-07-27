import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8 flex items-center py-12 pe-12 lg;pe-32 justify-between gap-8">
      <div className="img hidden md:flex md:w-[60%]">
        <img src="../../public/signup.png" alt="fashion" />
      </div>
      <div className="form flex flex-col gap-2 w-full md:w-[35%] justify-center">
        <h1 className="text-5xl">Create an account</h1>
        <p className="text-xl mb-8">Enter your details below</p>
        <form>
          <div className="form-group mb-8">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="pb-2 border-b-2 border-black/20 w-full"
            />
          </div>
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
          <button className="w-full py-4 bg-red-500 rounded-md text-white mb-3 hover:bg-red-400">
            Create Account
          </button>
          <button className="flex w-full justify-center items-center py-4 border-slate-500 border">
            <img src="../../public/google.png" alt="google" className="me-3" />
            Sign Up With Google
          </button>
          <p className="w-full text-center py-5 text-black/50">
            Already have account?{" "}
            <Link className=" underline font-semibold text-black" to={"/login"}>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
