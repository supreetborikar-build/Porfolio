import type { ProjectContent } from "../../types";

export default {
  title: "Strato",
  theme: "dark",
  tags: ["react", "fastapi", "openai", "python"],
  videoBorder: false,
  source: "https://github.com/supreetborikar-build",
  live: "https://supreetborikar-build.github.io/Strato/",
  description:
    "Strato ist ein KI-gestützter smarter Studentenbegleiter, der die Art und Weise verändert, wie Studierende lernen und ihr akademisches Leben organisieren.<br/><br/>Im Mittelpunkt steht Astra, ein intelligenter KI-Tutor, der personalisierte akademische Unterstützung bietet. Die Plattform kombiniert Deadline-Tracking, Anwesenheitsverwaltung und Produktivitätstools in einer einheitlichen Erfahrung.",
  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Strato wurde entwickelt, um ein reales Problem zu lösen: Studierende kämpfen damit, organisiert zu bleiben, und brauchen gleichzeitig intelligente akademische Unterstützung.",
      },
    },
    {
      type: "list",
      props: {
        title: "Hauptfunktionen",
        items: [
          "Astra — KI-Tutor mit OpenAI API für personalisierte Lernunterstützung",
          "Deadline-Management mit smarten Erinnerungen",
          "Anwesenheitstracking mit visuellen Analysen",
          "Produktivitäts-Dashboard",
          "React-Frontend mit responsivem UI",
          "FastAPI-Backend mit strukturiertem Prompt Engineering",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
