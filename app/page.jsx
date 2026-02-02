import Home from "@/app/home/Home";
import About from "@/app/about/about";
import Products from "@/app/products/Products";
import Review from "@/app/review/review";
import Services from "@/app/services/services";
import Contact from "@/app/contact/contact";

const Page = () => {
  return (
    <div>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="products"><Products /></div>
      <div id="review"><Review /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Page;
