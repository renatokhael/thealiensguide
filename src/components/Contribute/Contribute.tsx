import ContributeCard from "./ContributeCard";

export default function ContributeSection() {
  const cards = [
    {
      title: "Register",
      description: "Register your race with us. We will add it to the catalog.",
    },
    {
      title: "Contribute",
      description: "Contribute to the project. We will add it to the catalog.",
    },
    {
      title: "Donate",
      description: "Donate to the project. We will add it to the catalog.",
    },
    {
      title: "Contribute",
      description: "Contribute to the project. We will add it to the catalog.",
    },
  ];

  return (
    <section className="bg-surface min-h-[400px] py-16">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-10">
          HOW TO <span className="text-green">CONTRIBUTE</span> WORK
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ContributeCard />
          <ContributeCard />
          <ContributeCard />
          <ContributeCard />
        </div>
      </div>
    </section>
  );
}
