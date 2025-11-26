/**
 * Script de seed para poblar la base de datos con eventos de prueba
 * 
 * Uso: npm run db:seed
 * 
 * Este script carga manualmente las variables de entorno desde .env.local o .env
 * antes de importar cualquier módulo que las necesite.
 */

import * as fs from 'fs';
import * as path from 'path';
import mongoose from 'mongoose';

// Función para cargar variables de entorno manualmente desde .env.local o .env
const loadEnvFile = (): void => {
  // Intentar primero con .env.local, luego con .env
  const envPaths = [
    path.resolve(process.cwd(), '.env.local'),
    path.resolve(process.cwd(), '.env')
  ];

  let envPath: string | null = null;
  for (const p of envPaths) {
    if (fs.existsSync(p)) {
      envPath = p;
      break;
    }
  }

  if (!envPath) {
    console.error('❌ Error: No se encontró ningún archivo .env.local o .env');
    console.log('\n💡 Crea un archivo .env.local en la raíz del proyecto con:');
    console.log('   MONGODB_URI=mongodb+srv://...');
    process.exit(1);
  }

  console.log(`📄 Cargando variables de entorno desde: ${path.basename(envPath)}`);

  const envContent = fs.readFileSync(envPath, 'utf-8');
  const lines = envContent.split('\n');

  lines.forEach((line: string) => {
    const trimmedLine = line.trim();
    // Ignorar líneas vacías y comentarios
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        // Remover comillas si existen
        process.env[key.trim()] = value.replace(/^["']|["']$/g, '');
      }
    }
  });
};

// Cargar variables de entorno ANTES de importar módulos
loadEnvFile();

// Ahora importar los módulos que dependen de las variables de entorno
import Event from '@/database/event.model';
import { events } from './seed-data';

const MONGODB_URI = process.env.MONGODB_URI;

const seedDatabase = async (): Promise<void> => {
  try {
    // Verificar que MONGODB_URI esté disponible
    if (!MONGODB_URI) {
      console.error('❌ Error: MONGODB_URI no está definida en .env.local');
      console.log('\n💡 Asegúrate de tener un archivo .env.local con:');
      console.log('   MONGODB_URI=mongodb+srv://...');
      process.exit(1);
    }

    console.log('🔌 Conectando a MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB conectado exitosamente.');

    // Limpiar la colección de eventos existente
    console.log('🗑️  Eliminando eventos existentes...');
    const deleteResult = await Event.deleteMany({});
    console.log(`✅ ${deleteResult.deletedCount} eventos eliminados.`);

    // Insertar los nuevos datos
    console.log('📝 Insertando datos de prueba...');
    const insertedEvents = await Event.create(events);
    console.log(`✅ ${insertedEvents.length} eventos insertados exitosamente!`);

    // Mostrar los eventos insertados
    console.log('\n📋 Eventos insertados:');
    insertedEvents.forEach((event, index) => {
      console.log(`   ${index + 1}. ${event.title} (slug: ${event.slug})`);
    });

  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
    process.exit(1);
  } finally {
    // Cerrar la conexión
    await mongoose.disconnect();
    console.log('\n🔌 Conexión a MongoDB cerrada.');
  }
};

// Ejecutar la función
seedDatabase();
