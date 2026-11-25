import type { ProjectContent } from "../../types";

export default {
  title: "TaskFlow",
  theme: "dark",
  tags: ["react", "node", "openai", "typescript"],
  videoBorder: false,
  live: "https://supreetborikar-build.github.io/TaskFlow/",
  source: "https://github.com/supreetborikar-build",
  description:
    "TaskFlow ist eine KI-gestützte Projektmanagement-Anwendung, die intelligente Aufgabenorganisation mit umsetzbaren Einblicken kombiniert.",
  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "TaskFlow wurde entwickelt, um zu erkunden, wie KI Projektmanagement wirklich intelligent machen kann.",
      },
    },
  ],
} as const satisfies ProjectContent;
