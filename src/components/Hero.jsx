export default function Hero() {
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" }); // Desplazamiento suave
    }
  };

  return (
    <header id="hero" className="relative">
      <img
        src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
        alt=""
        className="absolute -z-10 inline-block h-full w-full object-cover"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
            The Website You Want for your new Workout.
          </h1>
          <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
            AI Fit is a platform that allows you to create your own customized
            workout program.
          </p>
          <button
            onClick={handleScroll}
            type="button"
            id="button"
            className="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
          >
            Get Started
          </button>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
          <div className="mx-auto">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="mx-auto">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="mx-auto">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="mx-auto">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="mx-auto">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
