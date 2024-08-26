"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/app/context/cartContextProvider";

export default function Checkout(){

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext must be used within a CartContextProvider");
    }

    const { getTotalCartItems, getTotalCartAmount } = cartContext;

    const getSubtotalCartAmount=getTotalCartAmount();
    const noOfItemsAdded=getTotalCartItems();

    const taxAmount=(): number=>{
        return (9/100)*getSubtotalCartAmount;
    }

    const totalAmount=(): number=>{
        let tax=taxAmount();
        let cartTotal=getSubtotalCartAmount;
        let delivery=(noOfItemsAdded>0)?30:0;
        return tax+cartTotal+delivery;
    }

    const formatCurrency = (amount: number): string => {
        return amount.toFixed(2);
      };

    return(
        <>
            <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">Checkout</h2>
            <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
                <div className="mx-10 md:col-span-2 mb-8">
                    <h2 className="font-bold text-xl sm:text-3xl">Billing Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-3">
                        <Input placeholder="Name..."/>
                        <Input placeholder="Email"/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-3">
                        <Input placeholder="Phone..."/>
                        <Input placeholder="Zip..."/>
                    </div>
                    <div className="mt-3">
                        <Input placeholder="Address..." />
                    </div>
                </div>
                <div className="mx-5 border">
                    <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart ({noOfItemsAdded})</h2>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-bold flex justify-between">Subtotal : <span>${getSubtotalCartAmount}</span></h2>
                        <hr /><hr />
                        <h2 className="flex justify-between">Delivery : <span>${(noOfItemsAdded>0)?30:0}</span></h2>
                        <h2 className="flex justify-between">Tax(9%) : <span>${formatCurrency(taxAmount())}</span></h2>
                        <h2 className="font-bold flex justify-between">Total : <span>${formatCurrency(totalAmount())}</span></h2>
                        <Button>Payment <ArrowBigRight /></Button>
                        <hr /><hr />
                    </div>
                </div>
            </div>
        </>
    )
}