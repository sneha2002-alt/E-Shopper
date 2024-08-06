import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import heroImage1 from "@/resources/img/heroImg/heroImage1.jpg";
import heroImage2 from "@/resources/img/heroImg/heroImage2.jpg";
import heroImage3 from "@/resources/img/heroImg/heroImage3.jpg";
import { Button } from "../ui/button";

const HeroSection = () => {
  const imgArr = [heroImage1, heroImage2, heroImage3];
  return (
    <div className="relative w-full h-screen md:h-screen">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="absolute w-full h-full"
      >
        <CarouselContent className="-mt-1 sm:h-[450px] md:h-fit md:min-h-screen">
          {imgArr.map((el, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 w-full md:w-auto h-full mt-56 md:mt-0"
            >
              <div className="p-1">
                <Image
                  src={el}
                  alt="fashionable dress"
                  width={1000}
                  height={1000}
                  className="lg:min-h-screen h-fit object-center sm:h-fit w-full md:object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-zinc-600 opacity-50 h-5 w-10 md:h-7 md:w-14" />
        <CarouselNext className="right-2 bg-zinc-600 opacity-50  h-5 w-10 md:h-7 md:w-14" />
      </Carousel>
      <div className="w-full md:text-center md:w-1/2">
        <div className="w-full md:w-1/2 m-auto md:absolute md:z-50 md:inset-24 flex flex-col items-center justify-center md:gap-6">
          <p className="md:text-white text-lg md:text-xl mt-2 text-center">
            10% OFF YOUR FIRST ORDER
          </p>
          <h2 className="md:text-white text-center text-3xl md:text-6xl font-bold">
            Fashionable Dress
          </h2>

          <Button className="mt-4 px-6 py-2 md:bg-white md:text-black text-white hover:bg-rose-500 hover:text-white font-semibold">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
