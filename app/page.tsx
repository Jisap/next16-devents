import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import React from 'react'
import { events } from './lib/constants'

// const events = [
//   { image: '/images/event1.png', title: 'Event 1', slug: 'event-1', location: 'Location 1', date: 'Date 1', time: 'Time 1' },
//   { image: '/images/event2.png', title: 'Event 2', slug: 'event-2', location: 'Location 2', date: 'Date 2', time: 'Time 2' },
//   { image: '/images/event3.png', title: 'Event 3', slug: 'event-3', location: 'Location 3', date: 'Date 3', time: 'Time 3' },
// ]


const Home = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home