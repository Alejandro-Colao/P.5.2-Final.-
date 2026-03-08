import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import equipoTrabajando from "../assets/imagenes/equipo-trabajando.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-24 md:py-32 px-4">
        <div className="flex flex-col items-start text-left gap-6">
          <span className="inline-block rounded-full border px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wide uppercase">
            Agencia de Publicidad
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Creatividad que impulsa{" "}
            <span className="text-primary">marcas</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Transformamos ideas en experiencias memorables. Estrategia, diseño y
            tecnología al servicio de tu marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="gap-2">
              Ver servicios <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Hablemos
            </Button>
          </div>
        </div>
        <div className="relative group perspective-1000 hidden lg:block">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 transform group-hover:rotate-y-12">
            <img
              src={equipoTrabajando}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-xl text-white animate-bounce-slow">
            <p className="font-bold text-lg">+10 años</p>
            <p className="text-xs opacity-90">De experiencia real</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
