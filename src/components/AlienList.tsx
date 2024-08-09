import CardAlien from "./CardAlien";

export default function AlienList() {
  return (
    <section className="min-h-[500px] flex justify-center items-center">
      <div className=" container mx-auto flex flex-col justify-center items-center p-10 rounded-2xl">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
          <CardAlien />
          <CardAlien />
          <CardAlien />
          <CardAlien />
        </div>
      </div>
    </section>
  );
}
