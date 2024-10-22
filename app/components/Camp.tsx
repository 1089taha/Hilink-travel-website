"use client";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useRef } from "react";

interface CampProps {
  backgroundImage: string;
  dimage: string;
  title: string;
  subtitle: string;
  peoplejoined: string;
}
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peoplejoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1 ">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="persons"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peoplejoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  //   // Ref to the container
  const scrollRef = useRef<HTMLDivElement>(null);

  //   // Function to scroll to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1100, behavior: "smooth" });
    }
  };

  //   // Function to scroll to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current?.scrollBy({ left: 1100, behavior: "smooth" });
    }
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:20 ">
      {/* Scrollable Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-50 p-2 w-12 h-12 rounded-full shadow-lg z-10"
          onClick={scrollLeft}
        >
          &#8592;
        </button>

        {/* Right Scroll Button */}
        <button
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-50 p-2 w-12 h-12 rounded-full shadow-lg z-10"
          onClick={scrollRight}
        >
          &#8594;
        </button>
      </div>

      {/* Camps */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Somewhere in the wilderness"
          peoplejoined="80+ Joined"
          dimage={""}
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Prigen, Pasuruan"
          peoplejoined="65+ Joined"
          dimage={""}
        />
      </div>
      <div className="flexEnd mt-10 px-16 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling unsure </strong>about your next adventure?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white ">
            Starting a new journey can be overwhelming, especially when
            you&apos;re exploring unfamiliar terrain. But don&apos;t worry!
            We're here to guide you every step of the way, ensuring you stay on
            course and enjoy every moment of your adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
