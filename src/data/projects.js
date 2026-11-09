// "category" must match one of the filter chips below.
export const categories = ["All", "AI", "Web", ".NET"];

export const projects = [
  {
    title: "Text-to-Image AI", category: "AI", meta: "Team Lead · Python",
    description: "System that converts text prompts into images, animations and voiceovers using machine learning, NLP and computer vision.",
    tags: ["Python", "ML", "NLP", "Computer Vision"],
    details: ["Led the team and owned architecture and task planning", "Built the prompt-to-media generation pipeline", "Add your result: accuracy or processing time"],
  },
  {
    title: "Enhanced POS Restaurant System", category: ".NET", meta: "Full-stack · ASP.NET MVC",
    description: "Full-stack point-of-sale application with billing, cart management, receipt generation, tax calculation and inventory integration.",
    tags: ["C#", "ASP.NET MVC", "SQL Server"],
    details: ["Normalized relational schema with real-time stock updates", "Billing, tax and receipt generation flows", "Add your number: entities, orders or performance gain"],
  },
  {
    title: "Text GPT & Image-to-Text AI", category: "AI", meta: "Solo · Gemini API",
    description: "Two generative AI apps built on the Gemini API: context-aware text generation and image-to-text description.",
    tags: ["Python", "Gemini API", "NLP"],
    details: ["Prompt engineering for accurate, relevant output", "Robust API handling and error management", "Image understanding and description pipeline"],
  },
  {
    title: "This portfolio", category: "Web", meta: "Solo · React + Vite",
    description: "Component-based React app with a command palette, scroll-spy, theming and animated sections.",
    tags: ["React", "Vite", "Hooks", "CSS"],
    details: ["Custom hooks for typing effect, reveal and scroll-spy", "Command palette with keyboard navigation (Ctrl/Cmd + K)", "Light and dark themes with persisted choice"],
  },
];
