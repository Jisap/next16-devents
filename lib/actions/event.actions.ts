'use server';

import Event, { IEvent } from '@/database/event.model';
import connectDB from "@/lib/mongodb";


export const getSimilarEventsBySlug = async (slug: string): Promise<IEvent[]> => {
  try {

    await connectDB();                                                    // Establece la conexión con la base de datos MongoDB.


    const event = await Event.findOne({ slug });                          // Primero, encuentra el evento actual usando su 'slug' para obtener sus etiquetas.


    return await Event.find({                                             // Luego, busca otros eventos en la base de datos que cumplan dos condiciones:
      _id: { $ne: event._id },                                            // 1. No ser el mismo evento que el actual (compara por '_id').
      tags: { $in: event.tags }                                           // 2. Tener al menos una etiqueta en común con el evento actual.
    })
      .lean()                                                             // .lean() optimiza la consulta devolviendo objetos JavaScript simples en lugar de documentos Mongoose completos.
      .exec() as unknown as IEvent[];                                     // .exec() ejecuta la consulta. (doble aserción: unknown -> IEvent[])

  } catch {

    return [];                                                             // Si ocurre algún error durante el proceso (ej. la base de datos no responde), devuelve un array vacío.
  }
}