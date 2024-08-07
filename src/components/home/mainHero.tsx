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
import heroImage4 from "@/resources/img/heroImg/heroImage4.jpg";
import heroImage5 from "@/resources/img/heroImg/heroImage5.jpg";
import { homeData } from "@/utils/homePage";
import { Button } from "../ui/button";

const HeroSection = () => {
  const {
    mainHero: { heading, subHeading, btnText },
  } = homeData;
  const imgArr = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className=""
      >
        <CarouselContent className="-mt-1 sm:h-[450px] md:h-fit md:max-h-screen">
          {imgArr.map((el, index) => (
            <CarouselItem key={index} className="basis-1/1 w-full">
              <div className="">
                <Image
                  src={el}
                  alt="fashionable dress"
                  width={1920}
                  height={1080}
                  className="lg:max-h-screen sm:h-fit w-full md:max-h-screen md:object-cover  object-contain
                   object-top"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:top-1/2 top-32 bg-zinc-600 opacity-50 h-5 w-8 md:h-7 md:w-14" />
        <CarouselNext className="right-2 md:top-1/2 top-32 bg-zinc-600 opacity-50  h-5 w-8 md:h-7 md:w-14" />
      </Carousel>
      <div className="w-full md:text-center md:w-1/2">
        <div className="w-full md:w-1/2 m-auto md:absolute md:z-50 md:inset-24 flex flex-col items-center justify-center md:gap-6 gap-5">
          <p className="md:text-white text-lg md:text-xl mt-2 pt-2 text-center">
            {subHeading}
          </p>
          <h2 className="md:text-white text-center text-3xl md:text-6xl lg:text-6xl font-bold">
            {heading}
          </h2>

          <Button className="my-6 px-6 py-2 md:bg-white md:text-black text-white hover:bg-rose-500 hover:text-white font-semibold">
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
