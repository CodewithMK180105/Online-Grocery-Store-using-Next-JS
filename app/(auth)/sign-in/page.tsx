import AccessAccount from "@/Pages/Sign_in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to FreshMart - Manage Your Orders and Preferences",
  description: "Shop fresh fruits, vegetables, dairy, bakery, grains, and more at FreshMart Market. Quality groceries delivered to your doorstep with convenience and reliability.",
};


export default function Sign_in(){
    return (
        <>
            <AccessAccount />
        </>
    )
}