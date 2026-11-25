export const social = [
  { url: "mailto:supreet@example.com", name: "mail" },
  { url: "https://github.com/supreetborikar-build", name: "github" },
  { url: "https://www.linkedin.com/in/supreet-borikar-255109338/", name: "linkedin" },
  { url: "https://www.instagram.com/_supreet_27_?dmpr=NXczY2hwM2UyZXVn", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
