import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/funtions";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    let newWorkout = generateWorkout({ poison, muscles, goals });
    console.log(newWorkout);
    setWorkout(newWorkout);
  }

  return (
    <>
      <main className="min-h-screen flex flex-col mx-auto bg-gradient-to-t from-slate-800 to-slate-950 text-white text-sm sm:text-base">
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
        {workout && <Workout workout={workout} muscles={muscles} poison={poison} />}
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
