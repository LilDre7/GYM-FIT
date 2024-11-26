import { useState, useEffect } from "react";
import gsap from "gsap";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/funtions";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el loader

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    let newWorkout = generateWorkout({ poison, muscles, goals });
    console.log(newWorkout);
    setWorkout(newWorkout);
  }

  // Simula que la página se ha cargado
  useEffect(() => {
    // Animación del loader con GSAP
    gsap.to(".loader", {
      opacity: 0,
      duration: 2,
      delay: 1,
      onComplete: () => setIsLoading(false),
    });
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col mx-auto bg-gradient-to-t from-slate-800 to-slate-950 text-white text-sm sm:text-base">
        <Navbar />
        <Hero />
        <Generator
          poison={poison}
          setPoison={setPoison}
          muscles={muscles}
          setMuscles={setMuscles}
          goals={goals}
          setGoals={setGoals}
          updateWorkout={updateWorkout}
        />

        {isLoading ? (
          // Loader visible al cargar la página
          <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black z-50">
            <div className="loader bg-black rounded-full w-16 h-16">
              <div className="loader-inner bg-white rounded-full w-12 h-12 animate-spin"></div>
            </div>
          </div>
        ) : (
          <>
            {workout && (
              <Workout workout={workout} muscles={muscles} poison={poison} />
            )}
            <Quotes />
            <AboutSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
