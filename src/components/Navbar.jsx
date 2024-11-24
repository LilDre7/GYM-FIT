import { ChevronDown, Code, Menu } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navbar() {
  // const location = useLocation()

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/thoughts",
      label: "Thoughts",
    },
    {
      href: "/playground",
      label: "Playground",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <a to="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-white" />
          </a>
        </div>
        <nav className="hidden md:flex flex-1 items-center space-x-6">
          {routes.map((route) => (
            <a
              key={route.href}
              to={route.href}
              className={cn(
                "text-sm transition-colors hover:text-white",
                location.pathname === route.href
                  ? "text-white bg-zinc-800 px-3 py-1.5 rounded-md"
                  : "text-zinc-400"
              )}
            >
              {route.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-amber-900/90 text-white border-none hover:bg-amber-900"
              >
                karl@kejk.tech
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
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
              className="w-[300px] bg-black text-white"
            >
              <nav className="flex flex-col space-y-4">
                {routes.map((route) => (
                  <a
                    key={route.href}
                    to={route.href}
                    className={cn(
                      "text-sm transition-colors hover:text-white",
                      location.pathname === route.href
                        ? "text-white bg-zinc-800 px-3 py-1.5 rounded-md"
                        : "text-zinc-400"
                    )}
                  >
                    {route.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
