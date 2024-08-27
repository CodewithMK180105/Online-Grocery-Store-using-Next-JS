import { TrashIcon } from "lucide-react";
import productItems from "../_utils/productItems";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/cartContextProvider";


export default function CartItemList({ cartItems }: { cartItems: Record<number, number> }) {

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Error: CartContext not found</div>; // Handle case where context is not available
    }
    const {removeFromCart}=cartContext;

    return (
        <>
            <div className="h-[75vh] overflow-auto hide-scrollbar">
                {Object.entries(cartItems)
                    .filter(([productId, quantity]) => quantity > 0) // Filter items with quantity > 0
                    .map(([productId, quantity], index) => {
                        const id = Number(productId);

                        // Find the product in productItems by matching the id
                        const product = productItems.find(item => item.id === id);

                        if (!product) {
                            // If product is not found, we return null or skip rendering for that item
                            return null;
                        }

                        return (
                            <div key={index} className="flex justify-between items-center p-2 mb-5">
                                <div className="flex gap-6 items-center">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} image`}
                                        height={80}
                                        width={80}
                                        className="border p-2"
                                    />
                                    <div>
                                        <h2 className="font-bold">{product.name}</h2>
                                        <h2>{product.item_quantity}</h2>
                                        <h2 className="text-lg font-bold">${product.sellingPrice} X {cartItems[Number(productId)]}</h2>
                                    </div>
                                </div>  
                                <TrashIcon className="cursor-pointer" onClick={()=>removeFromCart(product.id)} />  
                            </div>
                        );
                    })}
            </div>

            
        </>
    );
}
