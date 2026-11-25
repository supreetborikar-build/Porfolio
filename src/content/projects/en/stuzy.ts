import type { ProjectContent } from "../../types";

export default {
  title: "Stuzy",
  theme: "dark",
  tags: ["react", "fastapi", "openai", "python"],
  videoBorder: false,
  source: "https://github.com/supreetborikar-build",
  description:
    "Stuzy is an AI-powered smart student companion built to transform how students learn and manage their academic life.<br/><br/>At its core is Astra, an intelligent AI tutor that provides personalized academic assistance. The platform combines deadline tracking, attendance management, and productivity tools into a single cohesive experience.",
  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Stuzy was designed to solve a real problem: students struggle to stay organized while also needing intelligent academic support. The platform integrates AI assistance with practical productivity tools in a clean, focused interface.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Astra — AI tutor powered by OpenAI API for personalized academic assistance",
          "Deadline management with smart reminders and priority scoring",
          "Attendance tracking with visual analytics",
          "Productivity dashboard with study session timers",
          "React frontend with a fast, responsive UI",
          "FastAPI backend with structured AI prompt engineering",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Approach",
        text: "The frontend is built with React, emphasizing a clean and distraction-free UI. The backend uses FastAPI for high-performance async endpoints, with OpenAI API integration for Astra's conversational intelligence. The system is designed to be modular so individual features can evolve independently.",
      },
    },
  ],
} as const satisfies ProjectContent;
