export type ProjectTrack = "all" | "beginner" | "intermediate" | "advanced";

export const PROJECT_TRACK_FILTERS: { id: ProjectTrack; label: string; value: ProjectTrack }[] = [
  { id: "all", label: "ALL TRACKS", value: "all" },
  { id: "beginner", label: "BEGINNER", value: "beginner" },
  { id: "intermediate", label: "INTERMEDIATE", value: "intermediate" },
  { id: "advanced", label: "ADVANCED", value: "advanced" }
];

export type Project = {
  id: string;
  code?: string;
  name: string;
  shortDescription: string;
  track: "beginner" | "intermediate" | "advanced";
  domain?: string;
  difficulty?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Personal Portfolio Site",
    shortDescription: "Build a responsive personal website to showcase your skills and projects.",
    track: "beginner",
    domain: "Web",
    difficulty: "Low"
  },
  {
    id: "p2",
    name: "Expense Tracker",
    shortDescription: "Track your income and expenses with user authentication.",
    track: "intermediate",
    domain: "Web",
    difficulty: "Medium"
  },
  {
    id: "p3",
    name: "AI Study Assistant",
    shortDescription: "An app that generates flashcards and summaries from notes.",
    track: "advanced",
    domain: "AI",
    difficulty: "High"
  }
];
