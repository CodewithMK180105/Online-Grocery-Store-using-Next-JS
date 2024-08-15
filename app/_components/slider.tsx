import carouselImages from "../_utils/carouselImages";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  

export default function Slider(){
    return(
        <>
            <Carousel>
                <CarouselContent>
                    {carouselImages.map((slider,index)=>(
                        <CarouselItem key={index}>
                            <Image
                                src={slider.image}
                                alt="page"
                                width={1000}
                                height={400}
                                className="w-full h-[200px] lg:h-[400px] object-cover rounded-2xl"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}