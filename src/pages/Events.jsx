import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const defaultPastEvents = [
    {
      id: "static1",
      title: "SparkHack 2025",
      date: "2025-04-25",
      description:
        "A 24-hour flagship innovation hackathon with 300+ participants solving futuristic problem statements.",
      imageUrl:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "static2",
      title: "Tech Revolution Summit",
      date: "2025-02-18",
      description:
        "Industry experts and alumni shared insights on AI, VLSI, semiconductors and future technologies.",
      imageUrl:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "static3",
      title: "Robotics Workshop",
      date: "2024-11-10",
      description:
        "Hands-on robotics and embedded systems workshop with practical implementation.",
      imageUrl:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "static4",
      title: "AI/ML Bootcamp",
      date: "2024-08-15",
      description:
        "An intensive machine learning bootcamp covering model building and deployment.",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    },
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));

      const allEvents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const upcoming = [];
      const dynamicPast = [];

      allEvents.forEach((event) => {
        const eventDate = new Date(event.date);

        if (eventDate >= today) {
          upcoming.push(event);
        } else {
          dynamicPast.push(event);
        }
      });

      upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
      dynamicPast.sort((a, b) => new Date(b.date) - new Date(a.date));

      setUpcomingEvents(upcoming);
      setPastEvents([...dynamicPast, ...defaultPastEvents]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] px-8 md:px-16 py-20">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-white mb-3">
          Upcoming Events
        </h1>
        <p className="text-gray-400 text-lg">
          Stay updated with our latest workshops, hackathons and technical events.
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h2>

                <p className="text-cyan-400 font-medium mb-2">
                  {event.date}
                </p>

                <p className="text-gray-300 mb-5">
                  {event.description}
                </p>

                <button
                  onClick={() => navigate(`/register/${event.id}`)}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl text-white font-semibold"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No Upcoming Events</p>
        )}
      </div>

      {/* Past Events */}
      <div>
        <h1 className="text-5xl font-bold text-white mb-10">
          Past Events
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 opacity-80"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-56 object-cover grayscale"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h2>

                <p className="text-red-400 font-medium mb-2">
                  Ended on {event.date}
                </p>

                <p className="text-gray-400 mb-5">
                  {event.description}
                </p>

                <button
                  disabled
                  className="w-full py-3 bg-gray-700 rounded-xl text-gray-300 cursor-not-allowed"
                >
                  Registration Closed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;