import { Button } from "@/components/Button";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-primary py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          ¿Listo para tu próximo proyecto?
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
          Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8"
        >
          Contáctanos
        </Button>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> hola@nexusagency.com
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> +34 900 123 456
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
