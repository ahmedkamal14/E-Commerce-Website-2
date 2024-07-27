import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CopyRights from "./Components/CopyRights";
import Announcment from "./Components/Announcment";

function App() {
  return (
    <>
      <Announcment />
      <Header />
      <Outlet />
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
