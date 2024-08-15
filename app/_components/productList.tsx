import productItems from "../_utils/productItems"
import ProductItem from "./productItem"

export default function ProductList(){

    const displayedProducts = productItems.slice(0, 8);

    return(
        <div className="mt-10 p-5 sm:p-3">
            <h2 className="text-red-600 font-bold text-2xl">Our Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6">
                {displayedProducts.map((product,index)=>(
                    <ProductItem key={index} product={product} />
                ))}
            </div>
        </div>
    )
}