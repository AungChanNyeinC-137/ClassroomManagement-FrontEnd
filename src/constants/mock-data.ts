import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course covering basic programming concepts, problem-solving techniques, and an overview of computer systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "CS202",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    description:
      "Focuses on fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs, along with algorithm design and analysis.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "CS305",
    name: "Operating Systems",
    department: "Computer Science",
    description:
      "Covers core operating system concepts including process management, memory management, file systems, and concurrency.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 10,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course covering basic programming concepts, problem-solving techniques, and an overview of computer systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 11,
    code: "CS202",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    description:
      "Focuses on fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs, along with algorithm design and analysis.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 12,
    code: "CS305",
    name: "Operating Systems",
    department: "Computer Science",
    description:
      "Covers core operating system concepts including process management, memory management, file systems, and concurrency.",
    createdAt: new Date().toISOString(),
  },

  // ===== Engineering =====
  {
    id: 4,
    code: "ENG101",
    name: "Engineering Mathematics I",
    department: "Engineering",
    description:
      "Introduces mathematical methods used in engineering, including calculus, linear equations, and basic modeling techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    code: "ENG204",
    name: "Electrical Circuits",
    department: "Engineering",
    description:
      "Covers fundamental concepts of electrical circuits, including Ohm’s law, Kirchhoff’s laws, AC/DC analysis, and circuit theorems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    code: "ENG310",
    name: "Thermodynamics",
    department: "Engineering",
    description:
      "Studies the principles of energy, heat transfer, work, and the laws of thermodynamics with practical engineering applications.",
    createdAt: new Date().toISOString(),
  },

  // ===== Mathematics =====
  {
    id: 7,
    code: "MATH101",
    name: "Calculus I",
    department: "Mathematics",
    description:
      "Covers limits, derivatives, and integrals of single-variable functions with applications in science and engineering.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    code: "MATH220",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Introduces vector spaces, matrices, determinants, eigenvalues, and linear transformations.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 9,
    code: "MATH315",
    name: "Probability and Statistics",
    department: "Mathematics",
    description:
      "Focuses on probability theory, random variables, distributions, and statistical inference techniques.",
    createdAt: new Date().toISOString(),
  },
] as const;
