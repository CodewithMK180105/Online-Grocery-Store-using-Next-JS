"use client";
import { createContext, useState } from "react";
import productItems from "../_utils/productItems"; // Corrected the import path

interface CartContextType {
    cartItems: Record<number, number>;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    getTotalCartAmount: () => number;
    getTotalCartItems: () => number;
}
import { useToast } from "@/components/ui/use-toast"



export const CartContext = createContext<CartContextType | undefined>(undefined);

const getDefaultCart = (): Record<number, number> => {
    let cart: Record<number, number> = {};
    for (let index = 0; index < productItems.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const CartContextProvider = ({ children }: any) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    // console.log(cartItems);  
    
    const { toast } = useToast()

    const addToCart = (itemId: number, number_of_products: number) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+number_of_products}));
        // console.log(cartItems);
        toast({
            description: "Item added Successfully",
        })
    }
    
    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        console.log(cartItems);
        // alert("Item Removed Successfully")
        toast({
            description: "1 - Item removed Successfully",
        })
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        console.log(totalAmount);
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = productItems.find((product) => product.id === Number(item))
                if (itemInfo) {
                    totalAmount += itemInfo.sellingPrice * cartItems[item];
                }
            }
        }

        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in productItems) {
            if (cartItems[item] > 0) {
                totalItems += 1;
            }
        }
        return totalItems;
    }

    const contextValue = { cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
