import { Palette, BarChart3, Globe, FileText, Users, Award, CheckCircle } from "lucide-react";
import empleado1 from "../assets/imagenes/empleado1.png";
import empleado2 from "../assets/imagenes/empleado2.png";
import empleado3 from "../assets/imagenes/empleado3.png";

export const services = [
    {
        icon: Palette,
        title: "Branding",
        description: "Creamos identidades visuales únicas que conectan con tu audiencia y reflejan la esencia de tu marca.",
    },
    {
        icon: BarChart3,
        title: "Marketing Digital",
        description: "Estrategias basadas en datos para maximizar tu presencia online y generar resultados medibles.",
    },
    {
        icon: Globe,
        title: "Diseño Web",
        description: "Sitios web modernos, rápidos y responsivos que convierten visitantes en clientes.",
    },
    {
        icon: FileText,
        title: "Estrategia de Contenido",
        description: "Contenido relevante y atractivo que posiciona tu marca como referente en tu sector.",
    },
];

export const team = [
    {
        name: "Ana García",
        role: "Directora Creativa",
        image: empleado1
    },
    {
        name: "Carlos López",
        role: "Director de Marketing",
        image: empleado3
    },
    {
        name: "María Ruiz",
        role: "Diseñadora UX/UI",
        image: empleado2
    }
];

export const stats = [
    { label: "Proyectos Completados", value: "250+", icon: CheckCircle },
    { label: "Clientes Felices", value: "120+", icon: Users },
    { label: "Premios Ganados", value: "15", icon: Award },
];
