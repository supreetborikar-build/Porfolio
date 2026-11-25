import type { ProjectContent } from "../../types";

export default {
  title: "Smart City Simulation",
  theme: "dark",
  tags: ["javascript", "three", "glsl"],
  videoBorder: false,
  description:
    "An interactive smart city simulation that visualizes urban systems and infrastructure in real time. The project explores how data-driven cities of the future might function — from traffic flow and energy distribution to environmental monitoring.<br/><br/>Built with Three.js and GLSL shaders, the simulation creates an immersive 3D environment with dynamic, interactive elements.",
  components: [
    {
      type: "text",
      props: {
        title: "Concept",
        text: "The Smart City Simulation was created to explore both creative 3D development and AI-driven urban planning concepts. It demonstrates how sensor data, infrastructure networks, and population behavior could be visualized in an intuitive, interactive environment.",
      },
    },
    {
      type: "list",
      props: {
        title: "Technical Elements",
        items: [
          "Real-time 3D city rendering with Three.js",
          "Custom GLSL shaders for lighting and atmosphere effects",
          "Interactive building and infrastructure selection",
          "Dynamic data visualization overlays",
          "Procedurally generated urban layout",
          "Optimized rendering pipeline for smooth performance",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
