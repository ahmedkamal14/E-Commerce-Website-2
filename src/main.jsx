import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import LogIn from "./Pages/Login/LogIn.jsx";
import Error from "./Pages/Error/Error.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import { CartProvider } from "./Components/CartContext.jsx";
import Cart from "./Pages/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/E-Commerce-Website-2/",
    element: <App />,
    children: [
      {
        path: "/E-Commerce-Website-2/",
        element: <Home />,
      },
      {
        path: "/E-Commerce-Website-2/shop",
        element: <Shop />,
      },
      {
        path: "/E-Commerce-Website-2/signup",
        element: <SignUp />,
      },
      {
        path: "/E-Commerce-Website-2/cart",
        element: <Cart />,
      },
      {
        path: "/E-Commerce-Website-2/login",
        element: <LogIn />,
      },
      {
        path: "/E-Commerce-Website-2/contact",
        element: <Contact />,
      },
      {
        path: "/E-Commerce-Website-2/about",
        element: <About />,
      },
      {
        path: "/E-Commerce-Website-2/*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
