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
      <div className="mx-auto grid max-w-full gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto  md:w-[40rem] ">
          <h2 className="text-pretty text-center text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
            AI FIT WORKOUT 
          </h2>
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
          While vector methods are inaccurate and inconsistent, AI-Fit applies both vector and laser measurements to output reliable science-sourced fit data for the rotor and stator—data you need to optimize performance, torque and efficiency.
          </p>
        </div>
        <ul role="list" className="mx-auto grid gap-x-8 gap-y-9 sm:grid-cols-1 sm:gap-y-12 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-24 w-24 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-200">{person.name}</h3>
                  <p className="text-lg font-semibold leading-6 text-indigo-500">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
