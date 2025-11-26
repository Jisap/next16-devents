import React from 'react'
import { notFound } from "next/navigation";
import { IEvent } from "@/database/event.model";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Image from "next/image";
import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { cacheLife } from "next/cache";

// Define la URL base para las llamadas a la API, obtenida de las variables de entorno.
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Componente reutilizable para mostrar un detalle específico del evento (ej. fecha, hora, ubicación).
const EventDetailItem = ({ icon, alt, label }: { icon: string; alt: string; label: string; }) => (
  <div className="flex-row-gap-2 items-center">
    <Image
      src={icon}
      alt={alt}
      width={17}
      height={17}
    />
    <p>{label}</p>
  </div>
)

// Componente para renderizar la agenda del evento como una lista.
const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

// Componente para mostrar las etiquetas (tags) del evento.
const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
)

// Componente principal que renderiza la página de detalles de un evento.
// Es un Server Component asíncrono, lo que permite obtener datos directamente en el servidor.

const EventDetails = async ({ params }: { params: Promise<string> }) => {
  'use cache'                                                              // Directiva experimental para cacheo.
  cacheLife('hours');                                                      // Configura el tiempo de vida del cache.
  const slug = await params;                                               // Obtiene el 'slug' del evento desde los parámetros de la URL.

  let event;
  try {

    const request = await fetch(`${BASE_URL}/api/events/${slug}`, {        // Realiza una llamada a la API interna para obtener los detalles del evento
      next: { revalidate: 60 }                                             // `next: { revalidate: 60 }` implementa revalidación incremental (ISR) cada 60 segundos.
    });


    if (!request.ok) {                                                     // Si la respuesta no es exitosa (ej. error 500), maneja el error.
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }


    const response = await request.json();                                 // Parsea la respuesta JSON y extrae el objeto del evento.
    event = response.event;


    if (!event) {                                                          // Si el evento no se encuentra en la respuesta, muestra la página 404.
      return notFound();
    }
  } catch (error) {                                                        // Captura cualquier error durante el fetch (ej. problema de red) y muestra la página 404.
    console.error('Error fetching event:', error);
    return notFound();
  }


  const {                                                                  // Desestructura las propiedades del evento para usarlas fácilmente en el TSX.
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    tags,
    organizer
  } = event;


  if (!description) return notFound();                                      // Si no hay descripción, se asume que el evento no es válido y se muestra 404.

  const bookings = 10;                                                      // Variable de ejemplo para el número de reservas.

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);       // Llama a la Server Action para obtener una lista de eventos similares. Esta función se ejecuta en el servidor y consulta directamente la base de datos.

  return (
    <section id="event">
      <div className="header">
        <h1>Event Description</h1>
        <p>{description}</p>
      </div>

      <div className="details">
        {/* Lado Izquierdo - Contenido principal del evento */}
        <div className="content">
          <Image
            src={image}
            alt="Event Banner"
            width={800}
            height={800}
            className="banner"
          />

          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          <section className="flex-col-gap-2">
            <h2>Event Details</h2>
            {/* Usa el componente reutilizable para mostrar los detalles */}
            <EventDetailItem icon="/icons/calendar.svg" alt="calendar" label={date} />
            <EventDetailItem icon="/icons/clock.svg" alt="clock" label={time} />
            <EventDetailItem icon="/icons/pin.svg" alt="pin" label={location} />
            <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
            <EventDetailItem icon="/icons/audience.svg" alt="audience" label={audience} />
          </section>

          {/* Renderiza la agenda del evento */}
          <EventAgenda agendaItems={agenda} />

          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{organizer}</p>
          </section>

          {/* Renderiza las etiquetas del evento */}
          <EventTags tags={tags} />
        </div>

        {/* Lado Derecho - Formulario para reservar */}
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            {bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} people who have already booked their spot!
              </p>
            ) : (
              <p className="text-sm">Be the first to book your spot!</p>
            )}

            {/* Renderiza el Client Component 'BookEvent' que maneja la lógica de reserva en el cliente. */}
            <BookEvent eventId={event._id} slug={event.slug} />
          </div>
        </aside>
      </div>

      <div className="flex w-full flex-col gap-4 pt-20">
        {/* Sección para mostrar eventos similares */}
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
            <EventCard key={similarEvent.title} {...similarEvent} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default EventDetails