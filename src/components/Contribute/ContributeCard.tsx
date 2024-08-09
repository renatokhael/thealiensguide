export default function ContributeCard() {
  return (
    <div className="relative drop-shadow-xl min-w-[250px] h-[200px] overflow-hidden  bg-card1">
      <div className="absolute flex flex-col items-center justify-center text-white z-[1] opacity-90 inset-0.5 bg-card1">
        <h1 className="text-xl text-green font-bold">STEP</h1>
        <p>Connect Your Wallet</p>
      </div>
      <div className="absolute w-56 h-48 bg-green blur-[50px] -left-1/2 -top-1/2"></div>
    </div>
  );
}
