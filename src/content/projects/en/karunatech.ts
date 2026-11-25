import type { ProjectContent } from "../../types";

export default {
  title: "KarunaTech",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://supreetborikar-build.github.io/KarunaTech/",
  description:
    "KarunaTech is a hospital management system developed as part of the Smart India Hackathon. The project streamlines patient registration, appointment scheduling, and administrative workflows for healthcare facilities.<br/><br/>I was responsible for the complete frontend development — designing and building the user interface that makes complex healthcare data accessible and actionable.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "Built during the Smart India Hackathon, KarunaTech addresses inefficiencies in hospital administration. The challenge was to design a system that non-technical hospital staff could use intuitively while handling the complexity of healthcare data management.",
      },
    },
    {
      type: "list",
      props: {
        title: "Frontend Contributions",
        items: [
          "Patient registration and profile management interface",
          "Appointment scheduling with calendar view",
          "Doctor and department directory",
          "Administrative dashboard with key metrics",
          "Responsive layout for desktop and tablet use",
          "Clean, accessible UI with clear information hierarchy",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
