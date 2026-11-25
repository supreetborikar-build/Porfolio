import type { ProjectContent } from "../../types";

export default {
  title: "FaceVote",
  theme: "light",
  tags: ["python", "react", "typescript"],
  videoBorder: false,
  live: "https://supreetborikar-build.github.io/Decentralized-E-voting-system/",
  description:
    "FaceVote ist ein Konzeptprojekt für ein sicheres Wahlsystem mit Gesichtserkennung. Es erkundet KI im Kontext demokratischer Prozesse.",
  components: [
    {
      type: "text",
      props: {
        title: "Konzept & Motivation",
        text: "FaceVote untersucht, ob Gesichtserkennung als sichere Authentifizierungsmethode für digitales Wählen dienen kann — technisch und ethisch.",
      },
    },
  ],
} as const satisfies ProjectContent;
