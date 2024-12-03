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
import { Link } from "react-scroll"; // Importa Link de react-scroll

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="mr-4 flex items-center">
          <a to="/" className="flex items-center space-x-2">
            <ShipIcon className="h-6 w-6 text-white" />
          </a>
        </div>

        <nav className="hidden md:flex flex-1 items-center space-x-6">
          {navList.map((route) => (
            <Link
              key={route.id}
              to={route.href.replace("#", "")} // Asegúrate de que el href esté en el formato correcto
              smooth={true} // Agrega suavidad
              duration={500} // Duración del desplazamiento en milisegundos
              className={cn(
                "text-sm transition-colors hover:text-white cursor-pointer",
                location.pathname === route.href
                  ? "text-white bg-zinc-800 px-3 py-1.5 rounded-md"
                  : "text-zinc-400"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white text-black border-none hover:bg-gray-600"
              >
                DesignDream.tech
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-white hover:text-blue-500">
                alvaroaburto71@gmail.com
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[200px] bg-black text-white"
            >
              <nav className="flex flex-col space-y-4">
                {navList.map((route) => (
                  <Link
                    key={route.href}
                    to={route.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                    className={cn(
                      "text-2xl transition-colors hover:text-white",
                      location.pathname === route.href
                        ? "text-white bg-zinc-800 px-3 py-1.5 rounded-md"
                        : "text-zinc-400"
                    )}
                  >
                    {route.name}
                  </Link>
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
