import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "./Button";
import { toast, ToastContainer } from "react-toastify";

Workout.propTypes = {
  workout: PropTypes.array.isRequired,
  muscles: PropTypes.array.isRequired,
  muscleGroup: PropTypes.string.isRequired,
  updateWorkout: PropTypes.func.isRequired, // Para actualizar el workout
};

export default function Workout(props) {
  const { workout, muscles, muscleGroup, updateWorkout } = props;

  const [showWorkoutList, setShowWorkoutList] = useState(true); // Controlar la visibilidad de la lista
  const [updatedWorkout, setUpdatedWorkout] = useState([]); // Nuevo estado para manejar la lista actualizada de ejercicios

  // useEffect para asegurarse de que los nuevos workouts se actualicen correctamente
  useEffect(() => {
    setUpdatedWorkout(workout); // Cada vez que el workout cambie, actualiza el estado
  }, [workout]);

  // Función para reiniciar el entrenamiento
  function restartWorkoutButton() {
    // Resetea la lista de ejercicios y oculta la lista
    setUpdatedWorkout([]);
    setShowWorkoutList(false); // Oculta la lista de ejercicios
    setShowWorkoutList(true);
  }

  // Función para alternar la visibilidad de la lista de ejercicios
  const toggleWorkoutList = () => {
    setShowWorkoutList(!showWorkoutList);
  };

  // Funcion para suavidad de scroll
  const handleScrolls = () => {
    const targetSection = document.getElementById("newOneWorkout");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <>
      {/* Verificar si hay un workout y si la lista de ejercicios debería mostrarse */}
      {showWorkoutList && updatedWorkout.length > 0 && (
        <SectionWrapper
          id={"workout"}
          header={"welcome to"}
          title={["The", "DANGER", "zone"]}
        >
          <ToastContainer />
          {/* Mostrar la lista de ejercicios */}
          <div className="flex flex-col gap-4 mt-4">
            {updatedWorkout.map((exercise, i) => {
              return <ExerciseCard i={i} exercise={exercise} key={i} />;
            })}
          </div>

          <div className="flex justify-center mt-4">
            <scrollIntoView onClick={handleScrolls} href="#newOneWorkout">
              {/* Botón para generar un nuevo entrenamiento */}
              <Button
                func={restartWorkoutButton}
                text={"New Workout"}
                onClick={() => {
                  toast.success("New workout generated!");
                }}
              />
            </scrollIntoView>
          </div>
        </SectionWrapper>
      )}

      {/* Si no hay ejercicios o la lista está vacía */}
      {!showWorkoutList && updatedWorkout.length !== 2 && (
        <>
          <div className="flex flex-col gap-4 p-4 mt-3">
            {updatedWorkout.map((exercise, i) => {
              return <ExerciseCard i={i} exercise={exercise} key={i} />;
            })}
          </div>
          <div className="flex justify-center mt-4">
            <scrollIntoView onClick={handleScrolls} href="#newOneWorkout">
              {/* Botón para generar un nuevo entrenamiento */}
              <Button func={restartWorkoutButton} text={"NEW WORKOUT"} />
            </scrollIntoView>
          </div>
        </>
      )}
    </>
  );
}
