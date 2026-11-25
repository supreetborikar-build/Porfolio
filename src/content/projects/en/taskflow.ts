import type { ProjectContent } from "../../types";

export default {
  title: "TaskFlow",
  theme: "dark",
  tags: ["react", "node", "openai", "typescript"],
  videoBorder: false,
  live: "https://supreetborikar-build.github.io/TaskFlow/",
  source: "https://github.com/supreetborikar-build",
  description:
    "TaskFlow is an AI-powered project management application that combines intelligent task organization with actionable insights.<br/><br/>The platform helps teams and individuals manage projects through smart categorization, deadline tracking, and AI-generated productivity recommendations based on work patterns.",
  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "TaskFlow was built to explore how AI can make project management genuinely intelligent rather than just organized. The core idea: instead of just showing what tasks exist, the system understands priorities, identifies blockers, and suggests what to work on next.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "AI-generated project insights and priority recommendations",
          "Task boards with drag-and-drop organization",
          "Smart deadline tracking with conflict detection",
          "Team collaboration with role-based views",
          "Analytics dashboard with productivity trends",
          "Natural language task creation via AI input",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
