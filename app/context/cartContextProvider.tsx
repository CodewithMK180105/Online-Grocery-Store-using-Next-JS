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
import { useEffect } from "react";

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
    console.log(cartItems);    

    const addToCart = (itemId: number) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        // console.log(cartItems);
        alert("Item Added Successfully");
    }
    
    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        console.log(cartItems);
        alert("Item Removed Successfully")
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
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
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    console.log(getTotalCartItems);

    const contextValue = { cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
