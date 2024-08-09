import Link from "next/link";

export default function Heading() {
  return (
    <div className="bg-gradient-to-b from-black to-surface flex flex-col justify-center items-center py-16">
      <div className="mx-auto max-w-[750px] text-center p-10">
        <h1 className="text-white text-4xl my-5"> THE ALIEN GUIDE</h1>
        <p className="text-white text-xl tracking-tight leading-6 font-light">
          We are the largest catalog of alien races on the internet. Our code is
          open source and anyone can contribute, whether in developing the
          project or adding new races.{" "}
        </p>
      </div>

      <div className="mt-10 flex space-x-5">
        <Link
          href="#"
          className="bg-green border-2 border-green py-3 px-10 font-bold "
        >
          see catalog
        </Link>
        <Link
          href="#"
          className="border-2 border-green text-white py-3 px-10 font-bold"
        >
          Contribute
        </Link>
      </div>
    </div>
  );
}
