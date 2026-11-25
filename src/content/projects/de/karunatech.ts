import type { ProjectContent } from "../../types";

export default {
  title: "KarunaTech",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://supreetborikar-build.github.io/KarunaTech/",
  description:
    "KarunaTech ist ein Krankenhausverwaltungssystem, das im Rahmen des Smart India Hackathon entwickelt wurde. Ich war für die gesamte Frontend-Entwicklung verantwortlich.",
  components: [
    {
      type: "text",
      props: {
        title: "Kontext",
        text: "Entwickelt beim Smart India Hackathon. KarunaTech adressiert Ineffizienzen in der Krankenhausverwaltung mit einer intuitiven Benutzeroberfläche.",
      },
    },
  ],
} as const satisfies ProjectContent;
