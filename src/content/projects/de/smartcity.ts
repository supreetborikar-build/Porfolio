import type { ProjectContent } from "../../types";

export default {
  title: "Smart City Simulation",
  theme: "dark",
  tags: ["javascript", "three", "glsl"],
  videoBorder: false,
  description:
    "Eine interaktive Smart-City-Simulation, die urbane Systeme und Infrastruktur in Echtzeit visualisiert. Entwickelt mit Three.js und GLSL-Shadern.",
  components: [
    {
      type: "text",
      props: {
        title: "Konzept",
        text: "Die Smart-City-Simulation erkundet kreative 3D-Entwicklung und KI-gestützte Stadtplanung in einem immersiven, interaktiven Umfeld.",
      },
    },
  ],
} as const satisfies ProjectContent;
