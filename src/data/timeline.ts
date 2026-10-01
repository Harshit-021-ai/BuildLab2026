export type TimelineEvent = {
  id: string;
  date?: string;
  shortDate?: string;
  year?: string;
  title: string;
  time?: string;
  location?: string;
  description: string;
  type?: "milestone" | "phase";
  status?: "upcoming" | "active" | "completed";
  duration?: string;
};

export const TIMELINE: TimelineEvent[] = [
  {
    id: "inauguration",
    shortDate: "01 OCT",
    year: "2026",
    title: "Inauguration & Kick-off",
    time: "10:30 AM",
    location: "Nandi Hall",
    description: "Program briefing, track walkthrough, rules, PRD process and Discord onboarding.",
    type: "milestone",
    status: "upcoming"
  },
  {
    id: "prd-drafting",
    shortDate: "1–3 OCT",
    year: "2026",
    title: "PRD Drafting & Submission",
    description: "Participants and teams prepare and submit their PRDs.",
    type: "phase",
    status: "upcoming"
  },
  {
    id: "prd-approval",
    shortDate: "03 OCT",
    year: "2026",
    title: "PRD Approval Deadline",
    description: "Mentors review submissions. Development begins only after approval.",
    type: "milestone",
    status: "upcoming"
  },
  {
    id: "core-dev",
    shortDate: "4–8 OCT",
    year: "2026",
    title: "Core Development",
    description: "Repositories, Issues, Branches and Pull Requests are used to build the project's core requirements.",
    type: "phase",
    status: "upcoming"
  },
  {
    id: "mid-review",
    shortDate: "08 OCT",
    year: "2026",
    title: "Mid-Program Review",
    description: "Progress is checked against approved PRD milestones.",
    type: "milestone",
    status: "upcoming"
  },
  {
    id: "completion",
    shortDate: "9–12 OCT",
    year: "2026",
    title: "Completion, Testing & Documentation",
    description: "Teams finish core work, attempt stretch features, test their project and complete documentation.",
    type: "phase",
    status: "upcoming"
  },
  {
    id: "submission",
    shortDate: "13 OCT",
    year: "2026",
    title: "Final Submission",
    description: "Repositories are frozen for evaluation.",
    type: "milestone",
    status: "upcoming"
  },
  {
    id: "demo",
    shortDate: "14 OCT",
    year: "2026",
    title: "Demonstrations & Evaluation",
    description: "Projects are demonstrated and evaluated against the published rubric.",
    type: "milestone",
    status: "upcoming"
  },
  {
    id: "closing",
    shortDate: "15 OCT",
    year: "2026",
    title: "Results & Closing",
    description: "Results are announced and track winners are recognized.",
    type: "milestone",
    status: "upcoming"
  }
];
