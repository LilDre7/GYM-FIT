import { Button } from "./ui/button";
import { ChevronDown, Menu, ShipIcon } from "lucide-react";
import { cn } from "../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { navList } from "../utils/data";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navbar() {
  return (
    // Componente de encabezado (header) que se mantiene fijo en la parte superior de la página
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      {/* Contenedor principal que alinea los elementos dentro del encabezado */}
      <div className="container mx-auto flex h-14 items-center px-4">
        {/* Sección para el logo o icono */}
        <div className="mr-4 flex items-center">
          <a to="/" className="flex items-center space-x-2">
            <ShipIcon className="h-6 w-6 text-white" />
          </a>
        </div>

        {/* Navegación principal, oculta en pantallas pequeñas (md) */}
        <nav className="hidden md:flex flex-1 items-center space-x-6">
          {navList.map((route) => (
            <a
              key={route.id} // Clave única para cada enlace
              to={route.href} // Enlace de navegación
              className={cn(
                "text-sm transition-colors hover:text-white cursor-pointer", // Estilos básicos
                location.pathname === route.href // Compara la ruta actual
                  ? "text-white bg-zinc-800 px-3 py-1.5 rounded-md" // Estilos si es la ruta activa
                  : "text-zinc-400" // Estilos para rutas inactivas
              )}
            >
              {route.name}
            </a>
          ))}
        </nav>

        {/* Sección para el menú de usuario y botón de menú en dispositivos móviles */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Menú desplegable para opciones del usuario */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white text-black border-none hover:bg-gray-600"
              >
                DesignDream.tech {/* Correo electrónico del usuario */}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-white hover:text-blue-500">
                alvaroaburto71@gmail.com
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Botón de menú para dispositivos móviles */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5 text-white" /> {/* Icono de menú */}
                <span className="sr-only">Toggle menu</span>
                {/* Texto oculto para accesibilidad */}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[200px] bg-black text-white"
            >
              {/* Navegación para el menú en dispositivos móviles */}
              <nav className="flex flex-col space-y-4">
                {navList.map((route) => (
                  <a
                    key={route.href} // Clave única para cada enlace
                    to={route.href} // Enlace de navegación
                    className={cn(
                      "text-2xl transition-colors hover:text-white", // Estilos básicos
                      location.pathname === route.href // Compara la ruta actual
                        ? "text-white bg-zinc-800 px-3 py-1.5 rounded-md" // Estilos si es la ruta activa
                        : "text-zinc-400" // Estilos para rutas inactivas
                    )}
                  >
                    {route.name}
                  </a>
                ))}
                <p className="absolute bottom-0 py-9 text-6xl overflow-hidden">
                - Agency Design Dreams Studio
                </p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
