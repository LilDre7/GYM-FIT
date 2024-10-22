import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <p>ITS TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole
          <span className="text-blue-400 font-medium">HORMOUS</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light p-2">
        Lorem, ipsum dolor sit amet
        <span className="text-blue-400 font-medium">consectetur</span>
        adipisicing elit. Assumenda adipisci nam illo saepe fugit distinctio
        aspernatur quas corrupti numquam molestiae
        <span className="text-blue-400 font-medium">voluptate</span>, hic,
        explicabo a
        <span className="text-blue-400 font-medium">
          placeat blanditiis quod
        </span>
        asperiores alias? Velit?
      </p>
      <Button text={"Accept & Begin"} />
    </div>
  );
}
