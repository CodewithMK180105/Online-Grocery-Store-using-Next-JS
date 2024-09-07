"use client"
import { Button } from '@/components/ui/button';
import Image, { StaticImageData } from 'next/image';
import CartContextProvider from '../context/cartContextProvider';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ProductItemDetail from './productItemDetail';

interface Product {
    id: number;
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

export default function ProductItem({ product }: ProductProps) {
    return (
            <div className='p-2 md:p-6 flex flex-col items-center justify-between gap-3 border rounded-lg hover:scale-110 hover:shadow-lg transition-all ease-in-out cursor-pointer'>
             <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={200}
                className='w-[200px] h-[200px] object-contain'
            />
            <h2 className='font-bold text-lg'>{product.name}</h2>
            <div className='flex gap-3'>
                {product.sellingPrice && <h2>${product.sellingPrice}</h2>}
                <h2 className={`font-bold ${product.sellingPrice && 'line-through text-gray-500'}`}>${product.mrp}</h2>
            </div>
            
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="cursor-pointer hover:text-white hover:bg-primary ">
                        Add to Cart
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    
                    <DialogDescription>
                            <ProductItemDetail product={product}/>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
}
