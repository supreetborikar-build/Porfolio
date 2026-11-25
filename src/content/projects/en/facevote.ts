import type { ProjectContent } from "../../types";

export default {
  title: "FaceVote",
  theme: "light",
  tags: ["python", "react", "typescript"],
  videoBorder: false,
  live: "https://supreetborikar-build.github.io/Decentralized-E-voting-system/",
  description:
    "FaceVote is a concept application for a secure facial recognition-based voting system. The project explores how biometric authentication could make digital voting more accessible and verifiable while maintaining privacy.<br/><br/>This is a research and prototype project exploring the technical and ethical dimensions of AI in civic systems.",
  components: [
    {
      type: "text",
      props: {
        title: "Concept & Motivation",
        text: "Traditional voting systems face challenges with accessibility, security, and verification. FaceVote explores whether facial recognition could serve as a secure, liveness-verified authentication method for digital voting — examining both the technical feasibility and the ethical considerations involved.",
      },
    },
    {
      type: "list",
      props: {
        title: "System Design",
        items: [
          "Facial recognition using Python-based CV libraries",
          "Liveness detection to prevent spoofing attacks",
          "One-vote-per-identity enforcement",
          "React frontend with accessible voting interface",
          "Privacy-first architecture with local processing",
          "Audit trail system for transparency",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Note",
        text: "This is a conceptual prototype developed for academic exploration. It is not intended for production deployment. The project raises and discusses important questions about the responsible use of biometric AI in democratic processes.",
      },
    },
  ],
} as const satisfies ProjectContent;
