export type Mentor = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
  track?: string;
  bio?: string;
};

export const MENTORS: Mentor[] = [
  {
    id: "1",
    name: "Alex Doe",
    role: "Frontend Engineer",
    image: "/mentors/placeholder.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Full Stack Dev",
    image: "/mentors/placeholder.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    id: "3",
    name: "Sam Wilson",
    role: "UI/UX Designer",
    image: "/mentors/placeholder.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    id: "4",
    name: "Chris Evans",
    role: "Backend Engineer",
    image: "/mentors/placeholder.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    id: "5",
    name: "Natasha Romanoff",
    role: "Data Scientist",
    image: "/mentors/placeholder.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    id: "6",
    name: "Bruce Banner",
    role: "Cloud Architect",
    image: "/mentors/placeholder.jpg",
    linkedin: "#",
    github: "#",
  }
];
