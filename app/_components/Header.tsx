"use client";
import Image from "next/image";
import {
  CircleUserRound,
  LayoutGrid,
  Search,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import foodCategory from "../_utils/GlobalApi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItemList from "./cartItemList";
import { CartContext } from "../context/cartContextProvider"; // Corrected the import path
import  { useRouter } from "next/navigation";

export default function Header() {
  const [isLogin, setIsLogin] = useState(true);

  const router =useRouter();

  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }
  const { cartItems, getTotalCartAmount } = cartContext;

  const totalCartItem = (cartItems: Record<number, number>): number => {
    let total = 0;
    for (const i in cartItems) {
      if (cartItems[i] == 0) continue;
      else total++;
    }
    return total;
  };


  return (
    <div className="p-5 shadow-md flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={200} height={100} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {foodCategory.map((category, index) => (
              <Link href={"/productCategory/" + category.category}>
                <DropdownMenuItem
                  className="flex gap-4 items-center cursor-pointer"
                  key={index}
                >
                  <Image src={category.image} alt="item-logo" width={40} />
                  <h2 className="text-lg">{category.category}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="lg:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="outline-none"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Sheet>
          <SheetTrigger>
            <h2 className="flex items-center text-lg">
              {" "}
              <ShoppingBasket className="h-7 w-7 mr-3" />
              <span className="bg-primary text-white px-2 rounded-full">
                {totalCartItem(cartItems)}
              </span>
            </h2>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="bg-primary text-white font-bold text-lg p-2 text-center mt-5">
                My Cart
              </SheetTitle>
              <SheetDescription>
                <CartItemList cartItems={cartItems} />
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
              <div className="absolute w-[90%] bottom-6 flex flex-col">
                <h2 className="text-lg font-bold flex justify-between bg-white">
                  Subtotal <span>${getTotalCartAmount()}</span>
                </h2>
                <Button onClick={()=>{router.push('/checkout')}}>Checkout</Button>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>

        {!isLogin ? (
          <Link href={"/create-account"}>
            <Button>Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUserRound className="w-12 h-12 bg-green-100 text-primary p-2 rounded-full cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Order</DropdownMenuItem>
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
