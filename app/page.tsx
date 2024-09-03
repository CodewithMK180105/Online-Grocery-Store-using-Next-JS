import Image from "next/image";
import CategoryList from "./_components/categoryList";
import ProductList from "./_components/productList";
import Slider from "./_components/slider";
import banner from './_utils/assets/Banner.png'
import Footer from "./_components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreshMart - Buy Fresh Fruits, Vegetables, and Groceries Online",
  description: "Shop fresh fruits, vegetables, dairy, bakery, grains, and more at FreshMart Market. Quality groceries delivered to your doorstep with convenience and reliability.",
};


export default function Home() {
  return (
    <div className="p-5 md:p-14 px-1.5">
      <Slider/>
      <CategoryList categoryName="" />
      <ProductList />
      <Image
        alt="banner"
        src={banner}
        width={1000}
        height={300}
        className="w-full h-[400px] m-auto mt-12 object-contain"
      />
      <Footer/>
    </div>
  );
}