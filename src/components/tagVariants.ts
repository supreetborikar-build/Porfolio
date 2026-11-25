export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "node"
  | "next"
  | "vue"
  | "fastapi"
  | "springboot"
  | "openai"
  | "tailwind"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  node: "Node.js",
  next: "Next.js",
  vue: "Vue 3",
  fastapi: "FastAPI",
  springboot: "Spring Boot",
  openai: "OpenAI API",
  tailwind: "Tailwind CSS",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
