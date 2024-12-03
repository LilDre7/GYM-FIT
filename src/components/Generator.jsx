import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";
import ScrollIntoView from "react-scroll-into-view";
import { div } from "motion/react-client";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-lg sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setPoison,
    goals,
    setGoals,
    updateWorkout,
  } = props;

  const [showModal, setShowModal] = useState(false);

  function toggleModel() {
    setShowModal(!showModal);
  }

  function updateMuscle(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);

    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  const handleScrolls = () => {
    const targetSection = document.getElementById("pickOne");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" }); // Desplazamiento suave
    }
  };

  return (
    <section id="generator">
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <div id="target-section">
        {/* First container / choose your split */}
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure"}
        />
      </div>
      <div className="grid grid-cols-1 sm:flex sm:justify-center sm:mx-auto gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <ScrollIntoView
              onClick={handleScrolls}
              key={typeIndex}
              href="#pickOne"
            >
              <button
                id="pickOne"
                onClick={() => {
                  setMuscles([]);
                  setPoison(type);
                }}
                className={
                  "bg-slate-950 redshawo w-full border px-4 py-4 lg:w-60 sm:px-8 rounded-lg duration-200 hover:border-blue-400" +
                  (type === poison ? " border-blue-600" : "border-blue-400 ")
                }
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            </ScrollIntoView>
          );
        })}
      </div>
      {/* Second container / choose your measures */}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950 w-80 sm:w-[28rem] mx-auto flex flex-col border border-solid border-blue-400 rounded-md">
        <button
          onClick={toggleModel}
          className="relative flex items-center justify-center p-3"
        >
          <p className="capitalize">
            {muscles.length == 0
              ? "Select muscle groups"
              : muscles.join(" 🦾 ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 "></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  key={muscleGroupIndex}
                  onClick={() => {
                    updateMuscle(muscleGroup);
                  }}
                  className={`hover:text-blue-400 duration-200 ${
                    muscles.includes(muscleGroup) ? "text-blue-400" : ""
                  }`}
                >
                  <p className="">{muscleGroup.replaceAll("_", "")}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      {/* Third container / your exercises */}
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:flex sm:justify-center sm:mx-auto gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoals(scheme);
              }}
              className={
                "bg-slate-950 border px-4 py-4 sm:w-40 lg:w-60 rounded-lg duration-200 hover:border-blue-600" +
                (scheme === goals ? " border-blue-600" : "border-blue-400 ")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"FORMULATE"} />
    </SectionWrapper>
    </section>
  );
}
