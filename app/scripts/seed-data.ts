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
    image: "https://picsum.photos/seed/cloud-next-2025/1200/800",
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
    image: "https://picsum.photos/seed/react-conf-2025/1200/800",
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
    image: "https://picsum.photos/seed/nodejs-summit-2025/1200/800",
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
  }
];
