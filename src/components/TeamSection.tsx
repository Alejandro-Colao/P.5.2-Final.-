import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { team } from "../data/site-data";

const TeamSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Profesionales apasionados que dan vida a cada proyecto.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-6 group"
            >
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl scale-100 transition-transform duration-300 group-hover:scale-110">
                <AvatarImage src={member.image} />
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
