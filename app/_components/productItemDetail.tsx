
"use client"

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/cartContextProvider"; // Corrected the import path

interface Product {
    name: string;
    description: string;
    mrp: number;
    sellingPrice: number;
    image: StaticImageData; // This type is used for static images in Next.js
    item_quantity: string;
    category: string;
}

interface ProductProps {
    product: Product;
}

export default function ProductItemDetail({ product }: ProductProps){

    const [productTotalPrice,setProductTotalPrice]=useState(
        product.sellingPrice ? product.sellingPrice : product.mrp 
    );  

    const [quantity,setQuantity]=useState(1);

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext must be used within a CartContextProvider");
    }

    const { addToCart } = cartContext;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 bg-white text-black">
            <Image
                alt={product.name}
                src={product.image}
                width={300}
                height={300}
                className="bg-slate-200 p-5 h-[250px] w-[250px] md:h-[320px] md:w-[300px] object-contain rounded-lg m-auto"
            />
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <h2 className="text-sm text-gray-500">{product.description}</h2>
                <div className='flex gap-3'>
                    {product.sellingPrice && <h2 className="font-bold text-3xl">${product.sellingPrice}</h2>}
                    <h2 className={`font-bold text-3xl ${product.sellingPrice && 'line-through text-gray-500'}`}>${product.mrp}</h2>
                </div>
                <h2 className="font-medium text-lg">Quantity: {product.item_quantity}</h2>
                <div className="flex flex-col items-baseline gap-3">
                    <div className="flex gap-3 items-center">
                        <div className="p-2 border flex gap-10 items-center px-5">
                            <button disabled={quantity == 0} onClick={() => setQuantity(quantity - 1)}>-</button>
                            <h2>{quantity}</h2>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <h2 className="text-2xl font-bold">=${(quantity * productTotalPrice).toFixed(2)}</h2>
                    </div>
                    <Button className="flex gap-3" onClick={()=> addToCart(product.id)}>
                        <TiShoppingCart />
                        Add To Cart
                    </Button>
                </div>
                <h2><span className="font-bold">Category: </span>{product.category}</h2>
            </div>
        </div>
    )
}
