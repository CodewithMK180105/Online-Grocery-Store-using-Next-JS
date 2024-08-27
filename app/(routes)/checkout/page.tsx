"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/cartContextProvider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Dialogue_box from "@/app/_components/paymentdialogueComponent";

export default function Checkout() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }

  const { getTotalCartItems, getTotalCartAmount } = cartContext;

  const getSubtotalCartAmount = getTotalCartAmount();
  const noOfItemsAdded = getTotalCartItems();

  const taxAmount = (): number => (9 / 100) * getSubtotalCartAmount;
  const totalAmount = (): number => {
    const tax = taxAmount();
    const cartTotal = getSubtotalCartAmount;
    const delivery = noOfItemsAdded > 0 ? 30 : 0;
    return tax + cartTotal + delivery;
  };

  const formatCurrency = (amount: number): string => amount.toFixed(2);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">Checkout</h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <div className="mx-10 md:col-span-2 mb-8">
          <h2 className="font-bold text-xl sm:text-3xl">Billing Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-3">
            <Input placeholder="Name..." />
            <Input placeholder="Email" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-3">
            <Input placeholder="Phone..." />
            <Input placeholder="Zip..." />
          </div>
          <div className="mt-3">
            <Input placeholder="Address..." />
          </div>
        </div>
        <div className="mx-5 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart ({noOfItemsAdded})</h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold flex justify-between">
              Subtotal : <span>${formatCurrency(getSubtotalCartAmount)}</span>
            </h2>
            <hr />
            <h2 className="flex justify-between">
              Delivery : <span>${noOfItemsAdded > 0 ? 30 : 0}</span>
            </h2>
            <h2 className="flex justify-between">
              Tax (9%) : <span>${formatCurrency(taxAmount())}</span>
            </h2>
            <h2 className="font-bold flex justify-between">
              Total : <span>${formatCurrency(totalAmount())}</span>
            </h2>
            <hr />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => setIsDialogOpen(true)}>
                  Payment <ArrowBigRight />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Please Complete All Fields</DialogTitle>
                </DialogHeader>
                <Dialogue_box closeDialog={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
