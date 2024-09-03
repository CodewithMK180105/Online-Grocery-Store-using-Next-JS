 // Update with the correct path

import CreateAccount from "@/Pages/Sign_up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreshMart - Sign Up for Exclusive Offers and Updates",
  description: "Shop fresh fruits, vegetables, dairy, bakery, grains, and more at FreshMart Market. Quality groceries delivered to your doorstep with convenience and reliability.",
};

export default function SignInPage() {
  return (
    <div>
      <CreateAccount />
    </div>
  );
}
