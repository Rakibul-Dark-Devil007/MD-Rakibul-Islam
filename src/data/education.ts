/**
 * EDUCATION & EXPERIENCE TIMELINE DATA
 * Verified academic milestones, certifications, and entrepreneurial ventures.
 */

export interface TimelineEntry {
  id: string;
  type: "education" | "experience" | "certification";
  title: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
  highlights?: string[];
}

export const educationAndExperienceData: TimelineEntry[] = [
  {
    id: "nest-tech-founder",
    type: "experience",
    title: "Owner & Founder",
    organization: "Nest Tech Solution and Consultant",
    period: "2024 – Present",
    badge: "Entrepreneurship",
    description:
      "Leading technical initiatives, client consultation, web architecture design, and strategic digitalization solutions for local and regional businesses.",
    highlights: [
      "Client IT consultancy & solution roadmap planning",
      "Full-stack web architecture & implementation oversight",
      "Network infrastructure & security setup guidance",
    ],
  },
  {
    id: "bsc-cse",
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "American International University-Bangladesh (AIUB)",
    period: "2021 – 2025",
    badge: "Graduated",
    description:
      "Specialized in Computer Networking and Network Security. Rigorous coursework covering Data Structures, Algorithms, Web Technologies, Database Systems, Network Defense, and Software Engineering.",
    highlights: [
      "Specialization in Computer Networking & Network Security",
      "Hands-on routing/switching lab implementations & course capstone",
      "Active team player in software engineering projects",
    ],
  },
  {
    id: "cisco-cert",
    type: "certification",
    title: "Cisco Networking Certificate",
    organization: "Cisco Networking Academy / AIUB",
    period: "2021",
    badge: "Certified",
    description:
      "Completed foundational Cisco course covering TCP/IP protocol stack, network device configuration, packet routing, and subnet design.",
    highlights: ["Packet Tracer simulations", "Network fundamentals and security principles"],
  },
  {
    id: "hsc",
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    organization: "NS Govt College",
    period: "2018 – 2020",
    badge: "Science",
    description: "Completed higher secondary education with a major in Science curriculum.",
  },
  {
    id: "ssc",
    type: "education",
    title: "Secondary School Certificate (SSC)",
    organization: "Natore Govt Boy's High School (NGBHS)",
    period: "2016 – 2018",
    badge: "Science",
    description: "Completed secondary school education with strong foundations in science and mathematics.",
  },
];
