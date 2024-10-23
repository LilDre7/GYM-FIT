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
    <div className="mx-auto py-24 sm:py-32">
      <div className="mx-auto grid max-w-full gap-20 px-6">
        <div className="mx-auto md:w-[40rem] xl:ml-[5rem] ">
          <h2 className="text-pretty text-center text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
            AI FIT WORKOUT
          </h2>
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
            While vector methods are inaccurate and inconsistent, AI-Fit applies
            both vector and laser measurements to output reliable
            science-sourced fit data for the rotor and stator—data you need to
            optimize performance, torque and efficiency.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid gap-x-8 gap-y-9 sm:grid-cols-1 sm:gap-y-12 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-24 w-24 rounded-full"
                />
                <div>
                  <span className="w-full flex items-center gap-2">
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-200">
                      {person.name}
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                      target="_blank"
                      className="hover:text-gray-50 text-blue-400 dark:hover:text-white"
                    >
                      <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"
                        ></path>
                      </svg>
                      <span className="sr-only">Linkedin page</span>
                    </a>
                  </span>
                  <p className="text-lg font-semibold leading-8 text-indigo-500">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
