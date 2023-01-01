import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

interface CarouselProps {
  images: any[];
}

export default function Carousel({ images }: CarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const fullSizeImages = images.map((image, i) => (
    <SwiperSlide
      key={`full-size-slide-${i}`}
      className="relative h-full w-full"
    >
      <Image
        className="object-contain"
        src={image.node.url}
        alt={image.node.altText}
        fill
      />
    </SwiperSlide>
  ));

  const thumbsImages = images.map((image, i) => (
    <SwiperSlide
      key={`small-slide-${i}`}
      className="relative flex h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 xs:h-24"
    >
      <Image
        className="object-cover"
        src={image.node.url}
        alt={image.node.altText}
        fill
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "30px",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="aspect-w-1 aspect-h-1 h-[calc(100%-100px)] w-full bg-gray-300"
      >
        {fullSizeImages}
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="mx-auto mt-6 h-20 w-full max-w-2xl bg-white xs:h-24 lg:max-w-none"
      >
        {thumbsImages}
      </Swiper>
    </>
  );
}
