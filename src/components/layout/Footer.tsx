import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const Footer = () => {
  return (
    <footer className="border-t bg-background pt-16 pb-8 text-left">
      <div className="container px-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xl font-bold tracking-tight text-foreground">
              Nexus<span className="text-primary">Agency</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformamos marcas a través del diseño, la estrategia y la tecnología.
              Creatividad sin límites para resultados excepcionales.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diseño Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Estrategia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Noticias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Suscríbete para recibir las últimas novedades y tips de marketing.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Tu email" className="bg-background" />
              <Button size="sm">Unirse</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nexus Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
