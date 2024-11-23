import { industry } from "../utils/data";

export default function Hero() {
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" }); // Desplazamiento suave
    }
  };

  return (
    <header id="hero" className="relative bg-navbar bg-cover bg-center my-6">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
            The Website You Want for your new Workout.
          </h1>
          <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#f0ebeb] lg:mb-8">
            AI Fit is a platform that allows you to create your own customized
            workout program.
          </p>
          <button
            onClick={handleScroll}
            type="button"
            id="button"
            className="inline-block rounded-full bg-blue-400 px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
          >
            Get Started
          </button>
        </div>

        <div className="p-6 sm:p-0 mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
          {industry.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.name}
              className="inline-block sm:p-4 filter brightness-200 contrast-200"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
