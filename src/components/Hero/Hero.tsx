import Image from "next/image";
import Heading from "./Heading";

export function HeroSection() {
  return (
    <>
      <section className="relative h-[500px] w-full bg-black">
        <Image
          src="/hero/banner.jpg"
          alt="Gray"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>
      <Heading />
    </>
  );
}
