import { industry } from "../utils/data";

export default function Hero() {
  return (
    <header
      id="hero"
      className="section1 relative bg-cover bg-center min-h-screen overflow-hidden"
    >
      <div className="one container mx-auto w-full max-w-7xl px-5 py-16 sm:py-72">
        <div className="header flex flex-col mx-auto max-w-3xl text-center">
          <h1 className="header mb-6 pb-4 -translate-y-10 text-4xl font-bold text-white md:text-6xl">
            The Website You Want for your new Workout.
          </h1>
        </div>

        <div className="header flex flex-col mx-auto gap-10 mt-36 sm:flex-row sm:mt-0 sm:gap-5 sm:mx-16">
          {industry.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.name}
              className="inline-block sm:p-0 filter brightness-200 contrast-200"
            />
          ))}
        </div>
      </div>
      <video src="./section1 bg.mp4" muted autoPlay loop></video>
    </header>
  );
}
