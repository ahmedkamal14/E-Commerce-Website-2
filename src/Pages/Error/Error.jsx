import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8 my-12 flex flex-col">
      <div>
        <p className="text-black/50">
          <Link to={"/"}>Home</Link> /{" "}
          <span className="text-black font-bold underline">404 Error</span>
        </p>
      </div>

      <div className="text flex flex-col w-full items-center justify-center my-16 text-center">
        <div className="mt-16">
          <h1 className="text-5xl md:text-8xl mb-8 text-red-500">
            404 Not Found
          </h1>
          <p className="text-lg md:text-xl mb-12">
            Your visited page not found. You may go home page.
          </p>

          <Link>
            <button className="p-4 bg-red-500 rounded-md text-white mb-3 hover:bg-red-400">
              Back To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
