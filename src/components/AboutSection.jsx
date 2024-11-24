const people = [
  {
    name: "Alvaro Aburto",
    role: "Desarrollador Web full-stack 🧑🏽‍💻",
    imageUrl: "/pixelcut-export.png",
    linkedIn: "",
  },
];

export default function AboutSection() {
  return (
    <section className="section3 mx-auto py-24 sm:py-20 bg-[#121010]  ">
      {/* Contenedor principal de la sección con márgenes y padding */}
      <div className="three container mx-auto grid max-w-6xl gap-20 px-6 ">
        {/*-------------------------------- Seccion left ------------------------------------- */}
        <div className="left">
          {/* Video que se reproduce en bucle y está silenciado */}
          <video src="./section 3.webm" muted loop autoPlay></video>
        </div>
        {/* -------------------------------- Section right -------------------------------- */}
        <div className="right mx-auto md:w-[40rem] xl:ml-[5rem]">
          {/* Título de la sección */}
          <h2 className="text-pretty text-center text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
            AI FIT WORKOUT
          </h2>
          {/* Descripción de la sección */}
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
            The best workout for you, based on your goals and fitness level.
          </p>
          {/* Lista de personas involucradas */}
          <ul
            role="list"
            className="mx-auto mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-1 sm:gap-y-12 xl:col-span-2"
          >
            {/* Mapeo de la lista de personas */}
            {people.map((person) => (
              <li key={person.name} className="flex items-center gap-x-6">
                {/* Imagen de la persona */}
                <img
                  src={person.imageUrl}
                  alt=""
                  className="h-24 w-24 rounded-full"
                />
                <div>
                  {/* Nombre de la persona */}
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-200">
                    {person.name}
                  </h3>
                  {/* Rol de la persona */}
                  <p className="text-lg font-semibold leading-8 text-blue-500">
                    {person.role}
                  </p>
                  {/* Enlace a la página de LinkedIn de la persona */}
                  <a
                    href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                    target="_blank"
                    className="hover:text-gray-50 text-blue-400 dark:hover:text-white"
                  ></a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
