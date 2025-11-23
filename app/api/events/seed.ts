import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb';
import Event from '@/database/event.model';

// Carga las variables de entorno para que el script pueda usarlas
// npm install -D ts-node dotenv tsconfig-paths

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const seedEvents = [
  {
    title: 'DevConnect 2025: The Future of Code',
    description: 'An annual conference for developers to explore the latest trends in software development, from AI to quantum computing.',
    overview: 'Join us for two days of insightful talks, hands-on workshops, and networking opportunities with industry leaders. DevConnect is the place to be for anyone passionate about coding.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2340', // Usamos una URL de placeholder
    venue: 'Virtual',
    location: 'Online',
    date: '2025-10-20',
    time: '09:00',
    mode: 'online',
    audience: 'Software Developers, Tech Enthusiasts, Students',
    agenda: [
      "09:00 AM - 10:00 AM | Opening Keynote: The Next Decade of Development",
      "10:15 AM - 11:30 AM | Workshop: Building Scalable Apps with Next.js",
      "11:45 AM - 12:30 PM | Talk: Ethical AI in Modern Applications"
    ],
    organizer: 'TechEvents Inc.',
    tags: ['Development', 'AI', 'Next.js', 'Software']
  },
  {
    title: 'Local Hack Day: Build & Learn',
    description: 'A local community-driven hackathon to build cool projects and learn new skills in a collaborative environment.',
    overview: 'Spend a full day hacking on a project of your choice. Mentors will be available to help you with your code. Great for beginners and experts alike.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2340', // Usamos una URL de placeholder
    venue: 'Community Tech Hub',
    location: 'New York, NY',
    date: '2025-11-15',
    time: '10:00',
    mode: 'offline',
    audience: 'Hackers, Makers, Students',
    agenda: [
      "10:00 AM - 11:00 AM | Team Formation & Idea Pitching",
      "11:00 AM - 05:00 PM | Hacking Session",
      "05:00 PM - 06:00 PM | Project Demos & Awards"
    ],
    organizer: 'NY Tech Community',
    tags: ['Hackathon', 'Community', 'Coding']
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log('Database connected. Clearing existing events...');
    await Event.deleteMany({});
    console.log('Existing events cleared. Inserting seed data...');
    await Event.insertMany(seedEvents);
    console.log('Database has been seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

seedDatabase();