'use server';

import Booking from '@/database/booking.model';
import connectDB from "@/lib/mongodb";


export const createBooking = async ({ eventId, slug, email }: { eventId: string; slug: string; email: string; }) => {
  try {

    await connectDB();                                                       // Establece la conexión con la base de datos.


    await Booking.create({ eventId, slug, email });                          // Crea un nuevo documento 'Booking' en la colección con los datos proporcionados.


    return { success: true };                                                // Devuelve un objeto indicando que la operación fue exitosa.
  } catch (e) {
    console.error('create booking failed', e);
    return { success: false };
  }
}