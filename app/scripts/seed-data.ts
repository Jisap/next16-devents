// d:\React-Utilidades\next16-devevents\scripts\seed-data.ts
import Event, { IEvent } from '@/database/event.model';
import { InferSchemaType } from 'mongoose';

// Usamos InferSchemaType para obtener el tipo de dato simple del modelo, sin los métodos de Mongoose.
// Esto asegura que nuestros objetos de datos coincidan con lo que el modelo espera al crearlos.
export const events: InferSchemaType<typeof Event.schema>[] = [
  {
    title: "Cloud Next 2027",
    description: "Google’s premier cloud computing event, showcasing innovations in AI, infrastructure, and enterprise solutions.",
    overview: "Cloud Next 2025 highlights the latest in cloud-native development, Kubernetes, AI, and enterprise scalability. Developers, architects, and executives gather to learn about new Google Cloud services, best practices, and success stories.",
    image: "https://res.cloudinary.com/downe22q2/image/upload/v1763915049/DevEvent/ime69otkhf7rx786sl1e.png",
    venue: "Moscone Center",
    location: "San Francisco, CA",
    date: "2025-04-10",
    time: "08:30",
    mode: "hybrid",
    audience: "Cloud engineers, DevOps, enterprise leaders, AI researchers",
    agenda: [
      "08:30 AM - 09:30 AM | Keynote: AI-Driven Cloud Infrastructure",
      "09:45 AM - 11:00 AM | Deep Dives: Kubernetes, Data Analytics, Security",
      "11:15 AM - 12:30 PM | Product Demos & Networking",
      "12:30 PM - 01:30 PM | Lunch",
      "01:30 PM - 03:00 PM | Workshops: Scaling with GCP",
      "03:15 PM - 04:30 PM | Fireside Chat: The Future of Enterprise Cloud"
    ],
    organizer: "Google Cloud",
    tags: ["Cloud", "DevOps", "Kubernetes", "AI"]
  },
  {
    title: "React Conf 2028",
    description: "The official conference for React developers to explore the future of the library and ecosystem.",
    overview: "Join the React team and community for two days of talks and workshops. Learn about the latest features, performance improvements, and the future of UI development with React.",
    image: "https://res.cloudinary.com/downe22q2/image/upload/v1764182145/DevEvent/lhnekuk8ygvucmsr64qt.png",
    venue: "Henderson, NV",
    location: "Las Vegas, NV",
    date: "2025-05-22",
    time: "09:00",
    mode: "offline",
    audience: "Frontend developers, UI/UX designers, full-stack engineers",
    agenda: [
      "09:00 AM - 10:00 AM | Keynote: The Future of React",
      "10:15 AM - 11:30 AM | Concurrent Sessions: Server Components, State Management",
      "11:45 AM - 01:00 PM | Community Lightning Talks"
    ],
    organizer: "Meta",
    tags: ["React", "JavaScript", "Frontend", "UI"]
  },
  {
    title: "Node.js Global Summit 2025",
    description: "A virtual conference connecting the global Node.js community.",
    overview: "This summit covers everything from performance and security to new features in the Node.js runtime. A must-attend for backend and full-stack developers.",
    image: "https://res.cloudinary.com/downe22q2/image/upload/v1764255670/event3_v0gb8n.png",
    venue: "Online",
    location: "Worldwide",
    date: "2025-10-02",
    time: "10:00",
    mode: "online",
    audience: "Backend developers, API architects, JavaScript enthusiasts",
    agenda: [
      "10:00 AM - 11:00 AM | Keynote: State of the Node",
      "11:15 AM - 12:30 PM | Deep Dive: Performance Best Practices",
      "01:30 PM - 03:00 PM | Workshop: Building Secure APIs"
    ],
    organizer: "OpenJS Foundation",
    tags: ["Node.js", "Backend", "API", "JavaScript"]
  },
  {
    title: "AI & Machine Learning Conference 2026",
    description: "The premier conference for AI and ML innovators, researchers, and practitioners.",
    overview: "Explore the latest advancements in artificial intelligence and machine learning, from foundational research to practical applications across industries. Join us for keynotes, workshops, and networking opportunities.",
    image: "https://res.cloudinary.com/downe22q2/image/upload/v1764255677/event4_ezaiy2.png",
    venue: "DoubleTree by Hilton Tokyo Ariake",
    location: "Tokyo, Japan",
    date: "2026-05-18",
    time: "09:00",
    mode: "hybrid",
    audience: "AI/ML researchers, data scientists, software engineers, business leaders",
    agenda: [
      "09:00 AM - 10:00 AM | Keynote: The Future of AI",
      "10:15 AM - 11:30 AM | Deep Dive: Machine Learning Algorithms",
      "11:45 AM - 01:00 PM | Workshop: Building AI-Powered Applications",
      "01:00 PM - 02:00 PM | Lunch",
      "02:00 PM - 03:30 PM | Panel Discussion: AI Ethics and Society"
    ],
    organizer: "Cognition Conferences",
    tags: ["AI", "Machine Learning", "Data Science", "Innovation"]
  },
  {
    title: "Cybersecurity Summit 2026",
    description: "The essential event for cybersecurity professionals and leaders.",
    overview: "Stay ahead of emerging threats and learn best practices for protecting your organization. This summit features expert speakers, hands-on workshops, and networking opportunities with industry peers.",
    image: "https://res.cloudinary.com/downe22q2/image/upload/v1764255693/event6_dtbbuj.png",
    venue: "Hynes Convention Center",
    location: "Boston, MA",
    date: "2026-03-16",
    time: "08:00",
    mode: "offline",
    audience: "CISOs, security executives, IT professionals, risk managers",
    agenda: [
      "08:00 AM - 09:00 AM | Registration & Breakfast",
      "09:00 AM - 10:00 AM | Keynote: The Evolving Threat Landscape",
      "10:15 AM - 11:30 AM | Breakout Sessions: Incident Response, Data Privacy",
      "11:45 AM - 01:00 PM | Workshop: Cybersecurity Risk Assessment",
      "01:00 PM - 02:00 PM | Lunch",
      "02:00 PM - 03:30 PM | Panel Discussion: The Future of Cybersecurity"
    ],
    organizer: "Gartner",
    tags: ["Cybersecurity", "Infosec", "Threat Intelligence", "Risk Management"]
  },
  {
    title: "Photonics West 2026",
    description: "The leading event for photonics, laser, and biomedical optics technologies.",
    overview: "Discover the latest research and innovations in photonics and optics. This conference showcases cutting-edge technologies and applications, with a wide range of technical sessions, exhibitions, and networking events.",
    image: "https://res.cloudinary.com/downe22q2/image/upload/v1764255685/event5_rbqyri.png",
    venue: "Moscone Center",
    location: "San Francisco, CA",
    date: "2026-01-24",
    time: "09:00",
    mode: "offline",
    audience: "Engineers, scientists, researchers, product developers",
    agenda: [
      "09:00 AM - 10:00 AM | Plenary Session: Advances in Photonics",
      "10:15 AM - 11:30 AM | Technical Sessions: Laser Technology, Biomedical Optics",
      "11:45 AM - 01:00 PM | Exhibition & Product Demonstrations",
      "01:00 PM - 02:00 PM | Lunch",
      "02:00 PM - 03:30 PM | Workshops: Optical Design, Quantum Photonics"
    ],
    organizer: "SPIE",
    tags: ["Photonics", "Optics", "Lasers", "Biomedical Optics"]
  }
];
