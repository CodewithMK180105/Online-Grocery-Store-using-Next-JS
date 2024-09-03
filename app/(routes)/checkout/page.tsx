import CheckoutPage from "@/Pages/checkout_page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreshMart - Finalize Your Order and Proceed to Payment",
  description: "Shop fresh fruits, vegetables, dairy, bakery, grains, and more at FreshMart Market. Quality groceries delivered to your doorstep with convenience and reliability.",
};

export default function Checkout(){
  return (
    <>
      <CheckoutPage />
    </>
  )
}