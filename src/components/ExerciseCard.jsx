import React, { useState } from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;

  const [setsCompleted, setSetsComplete] = useState(0);

  function handleSetIncrement() {
    setSetsComplete((setsCompleted + 1) % 6);
  }

  return (
    <section className="p-6 rounded-lg flex flex-col gap-8 bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg sm:w-[40rem] sm:mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-4">
        <h4 className="text-4xl hidden sm:inline font-bold text-blue-300">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-xl sm:text-2xl md:text-3xl flex-1 sm:text-center text-white">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-gray-300 capitalize">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-gray-400 text-sm">Muscle Groups</h3>
        <p className="capitalize text-white">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-slate-800 rounded-lg p-4 shadow-md">
        {exercise.description.split("___").map((desc, index) => (
          <div key={index} className="text-sm text-gray-200 mb-2">
            {desc}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-4">
        {["reps", "rest", "tempo"].map((info) => (
          <div
            key={info}
            className="flex flex-col p-4 rounded-lg bg-slate-700 border border-slate-600 transition duration-200 hover:bg-slate-600 w-full"
          >
            <h3 className="capitalize text-gray-300 text-sm">
              {info === "reps" ? `${exercise.unit}` : info}
            </h3>
            <p className="font-semibold text-white">{exercise[info]}</p>
          </div>
        ))}
        <button
          onClick={handleSetIncrement}
          className="flex flex-col p-4 rounded-lg bg-blue-600 border border-blue-500 transition duration-200 hover:bg-blue-500 w-full"
        >
          <h3 className="text-gray-200 text-sm capitalize">Sets completed</h3>
          <p className="font-semibold text-white">{setsCompleted} / 5</p>
        </button>
      </div>
    </section>
  );
}
