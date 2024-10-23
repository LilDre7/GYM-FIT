import Button from "./Button";
import ScrollIntoView from "react-scroll-into-view";

export default function Hero() {
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" }); // Desplazamiento suave
    }
  };

  return (
    <div id="newOneWorkout" className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <img className="w-40 h-40 mx-auto" src="/logo.png" alt="ai-fit" />
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-base md:text-lg font-mono">
        I hereby acknowledgement that I may become
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>
        and accept all risks of becoming the local
        <span className="text-blue-400 font-medium">mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <ScrollIntoView onClick={handleScroll} href="#target-section">
        <Button
          className="mix-blend-color-burn"
          func={() => {
            window.location.href = "#generate";
          }}
          text={"Accept & Begin"}
        ></Button>
      </ScrollIntoView>
    </div>
  );
}
