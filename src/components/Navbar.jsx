import { navList } from "../utils/data";

export default function Navbar() {
  return (
    <section className="w-full px-8 text-gray-700 bg-transparent">
      {/* Sección que ocupa todo el ancho, con padding horizontal y texto gris sobre fondo blanco */}

      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        {/* Contenedor flexible que organiza elementos en columna (móvil) o fila (escritorio), con margen automático y ancho máximo */}

        <div className="relative flex flex-col md:flex-row">
          {/* Contenedor para el logotipo y la navegación, adaptable a columnas o filas */}

          <a
            href="#"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            {/* Enlace del logotipo, con alineación y márgenes que cambian según el tamaño de pantalla */}

            <span className="mx-auto text-xl font-black leading-none text-white select-none">
              {/* Texto del logotipo, grande y en negrita, no seleccionable */}
              AI FIT<span className="text-indigo-600">.</span>
              {/* Punto en color índigo */}
            </span>
          </a>

          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {/* Navegación que se adapta a diferentes tamaños de pantalla, con márgenes y borde izquierdo en pantallas medianas y superiores */}

            {navList.map((item, index) => (
              // Mapeo de 'navList' para generar enlaces de navegación
              <div key={index}>
                <a
                  href={item.href}
                  className="mr-5 font-medium leading-6 text-white hover:text-gray-900"
                >
                  {/* Enlace de navegación con margen derecho y efecto hover */}
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {/* Contenedor para los botones de inicio de sesión y registro, alineados en línea */}

          <a
            href="#"
            className="text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            {/* Enlace de inicio de sesión con efecto hover */}
            Sign in
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-400 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            {/* Botón de registro con fondo índigo, bordes redondeados y efectos de hover y foco */}
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
}
