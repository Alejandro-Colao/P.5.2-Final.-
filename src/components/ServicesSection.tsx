import { Card, CardContent } from "@/components/Card";
import { services } from "../data/site-data";

const ServicesSection = () => {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container px-4 text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de comunicación y marketing para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-none bg-background shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-left">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Ver todos los servicios →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
