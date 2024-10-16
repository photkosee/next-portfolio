const stackMap: Record<string, string> = {
  "React": "reactjs",
  "Next.js": "nextjs2",
  "React Native": "reactjs",
  "HTML": "html5",
  "CSS": "css3",
  "TailwindCSS": "tailwindcss",
  "Redux Toolkit": "redux",
  "Zustand": "default-icon",
  "Javascript": "js",
  "TypeScript": "typescript",
  "Python": "python",
  "Java": "java",
  "C": "default-icon",
  "C#": "csharp",
  "ASP.NET Core": "default-icon",
  "Express": "default-icon",
  "NestJS": "nestjs",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Docker": "docker",
  "Firebase": "firebase",
  "Wireshark": "default-icon",
  "Jest": "jest",
  "Cypress": "cypress",
  "Gradle": "default-icon",
  "Postman": "postman"
}

const findIconByName = (name: string): string | null => {
  return stackMap[name] || null; // Return null if the name doesn't exist
}

export default findIconByName;
