"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import React, { useContext, useState } from "react";
import { CartContext } from "@/app/context/cartContextProvider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Dialogue_box from "@/app/_components/paymentdialogueComponent";

export default function CheckoutPage() {
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
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    address: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (name: string) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d+$/.test(phone);
  const validateZip = (zip: string) => /^\d{6}$/.test(zip);
  const validateAddress = (address: string) => address.trim() !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error messages on input change
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = () => {
    // Perform validation
    const nameError = validateName(formData.name) ? '' : 'Name should only contain letters and spaces';
    const emailError = validateEmail(formData.email) ? '' : 'Invalid email format';
    const phoneError = validatePhone(formData.phone) ? '' : 'Phone number should only contain digits';
    const zipError = validateZip(formData.zip) ? '' : 'Zip code should be exactly 5 digits';
    const addressError = validateAddress(formData.address) ? '' : 'Address is required to deliver the products';

    // Update errors state
    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      zip: zipError,
      address: addressError,
    });

    const formIsValid=!nameError && !emailError && !phoneError && !zipError && !addressError;
    setIsFormValid(formIsValid);

    // If there are no errors, proceed with form submission
    if (formIsValid) {
      console.log('Form submitted with data:', formData);
      // Reset form data and close dialog
      setFormData({
        name: '',
        email: '',
        phone: '',
        zip: '',
        address: '',
      });
      setIsDialogOpen(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">Checkout</h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <div className="mx-10 md:col-span-2 mb-8">
          <h2 className="font-bold text-xl sm:text-3xl">Billing Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-3">
            <div>
              <Input 
                placeholder="Name..." 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {isSubmitted && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Input 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {isSubmitted && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-3">
            <div>
              <Input 
                placeholder="Phone..." 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {isSubmitted && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <Input 
                placeholder="Zip..." 
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
              />
              {isSubmitted && errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
            </div>
          </div>
          <div className="mt-3">
            <Input 
              placeholder="Address..." 
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {isSubmitted && errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
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
                <Button className="w-full" onClick={() => {
                  handleSubmit(); // Handle form submission
                  setIsDialogOpen(true);
                }}>
                  Payment <ArrowBigRight />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-auto">
                <DialogHeader>
                  <DialogTitle>Created By Manishkumar</DialogTitle>
                </DialogHeader>
                <Dialogue_box closeDialog={() => setIsDialogOpen(false)} isFormValid={isFormValid} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
