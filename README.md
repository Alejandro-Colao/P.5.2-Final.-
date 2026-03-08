# Práctica Final: Nexus Agency Home Corporativa

## Descripción del proyecto

Proyecto final de la home corporativa para la empresa de marketing **Nexus Agency**. Desarrollado con **React** y **Tailwind CSS**, implementa un mini sistema de diseño, componentes reutilizables sin dependencias de UI framework externas (usando puro Tailwind), e integra soporte completo para modo noche.

## Capturas de la Home

### Modo Claro
*(Nota del desarrollador: Aquí el estudiante debe incrustar sus propias capturas locales)*

### Modo Oscuro
*(Nota del desarrollador: Aquí el estudiante debe incrustar sus propias capturas locales)*

## Sistema de Diseño

Se ha seguido un sistema de diseño consistente:

1. Paleta de colores
Establece los colores principales de la marca. Incluye:

- Primary (#0F1C8A): color principal usado en elementos importantes como botones o enlaces.

- Secondary (#F0EDEA): color de apoyo para fondos o secciones.

- Accent (#F45A34): color para destacar acciones o elementos importantes.

- Danger (#DC2828): usado para errores o advertencias.

- También incluye variaciones (50–900) del color primario y neutro para crear jerarquía visual, fondos y estados.

2. Tipografías
Define las fuentes y tamaños para mantener coherencia:

- Outfit para encabezados (H1, H2, H3).

- DM Sans para texto de contenido y texto pequeño.

Esto ayuda a crear una jerarquía clara de información.

3. Botones
Se especifican estilos de botones reutilizables:

- Primary Button: para la acción principal.

- Secondary Button: para acciones secundarias.

4. Contenedores y componentes
Incluye estructuras base para organizar contenido:

- Standard Section: contenedor principal de secciones.

- Tarjeta Base: para mostrar información en bloques.

- Bloque Muted: contenedor con fondo suave para diferenciar contenido.

- **Colores:** Se utilizan variables de tema a través de Tailwind CSS (`bg-background`, `text-foreground`, colores primarios e inversos). 
- **Tipografía:** Se estableció un jerarquizado directo mediante pesos variados en fuentes de sistema sin-serif con un buen espaciado clásico (`tracking-tight`).
- **Componentes base:** Creación modular de componentes mínimos como `<Button />`, `<Card />` o `<Input />` utilizando `forwardRef` para respetar el patrón de diseño estandarizado sin incluir librerías prohibidas como Shadcn o MUI.
- Puedes encontrar una explicación mayor y los colores exactos en el [PDF del Design System](./src/assets/Design_System.pdf).

## Instrucciones para levantar el proyecto

1. Realizar `npm install`
2. Ejecutar de manera local con `npm run dev`
