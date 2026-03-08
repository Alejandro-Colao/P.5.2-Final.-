import { useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import logo from "../../assets/imagenes/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Nosotros", href: "#" },
  { label: "Servicios", href: "#" },
  { label: "Noticias", href: "#" },
  { label: "Contacto", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <span>Nexus<span className="text-primary">Agency</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm">Contacto</Button>
          </div>
        </nav>

        {/* Mobile nav toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav overlay */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden shadow-lg animate-in fade-in slide-in-from-top-4">
            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-2 w-full">Contacto</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
