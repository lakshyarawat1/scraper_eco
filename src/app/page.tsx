import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="flex gap-2 text-sm font-medium text-red-500">
              Smart online stores
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="right-arrow"
                width={16}
                height={16}
              />
            </p>
            <h1 className="mt-4 text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900">
              Unleash the power of{" "}
              <span className="text-red-500">Scraper-Eco</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="flex flex-col gap-10 px-6 md:px-20 py-24">
        <h2 className="text-[32px] font-semibold">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple Iphone 15", "Book", "Sneakers"].map((product, key) => (
            <div key={key}>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
