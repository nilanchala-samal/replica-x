import { Outlet } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
