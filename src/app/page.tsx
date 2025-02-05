import Topheader from "./components/Topheader/page";
import Hero from "./components/Hero/page";
import Editors from "./components/editorspick/page";
import Classman from "./components/Classman/page";
import Navbar from "./components/Navbar/page";
import Products from "./components/products-Card/page";
import Universe from "./components/Universe/page";
import FuturePost from "./components/Futured/page";
import Footer from "./components/Footer/page";
import Furniture from "./components/Furniture/page";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Furniture />
   
      <Editors />
      <Products />
      <Classman />
      <Universe />
      <FuturePost />
      <Footer />
    </>
  );
}
