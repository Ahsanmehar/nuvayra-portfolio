import {
  Code2,
  Database,
  Server,
  Globe,
  Smartphone,
} from "lucide-react";

export const technologiesData = [
  {
    id: 1,
    name: "React",
    icon: Code2,
    description: "Building dynamic user interfaces",
    color: "from-blue-500 to-cyan-500",
    position: "top-0 left-0",
  },
  {
    id: 2,
    name: "Node.js",
    icon: Server,
    description: "Scalable backend solutions",
    color: "from-green-500 to-emerald-500",
    position: "top-0 right-0",
  },
  {
    id: 3,
    name: "MongoDB",
    icon: Database,
    description: "Flexible data management",
    color: "from-purple-500 to-violet-500",
    position: "bottom-0 left-0",
  },
  {
    id: 4,
    name: "Next.js",
    icon: Globe,
    description: "Full-stack web framework",
    color: "from-orange-500 to-red-500",
    position: "bottom-0 right-0",
  },
  {
    id: 5,
    name: "React Native",
    icon: Smartphone,
    description: "Cross-platform mobile apps",
    color: "from-pink-500 to-rose-500",
    position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
];
