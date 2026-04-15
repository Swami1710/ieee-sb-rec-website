import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "@emailjs/browser";

function RegistrationsAdmin() {
  const [registrations, setRegistrations] = useState([]);
  const [eventsMap, setEventsMap] = useState({});
  const [selectedEvent, setSelectedEvent] = useState("all");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const eventSnapshot = await getDocs(collection(db, "events"));
      const eventMap = {};

      eventSnapshot.docs.forEach((docSnap) => {
        eventMap[docSnap.id] = docSnap.data().title;
      });

      setEventsMap(eventMap);

      const regSnapshot = await getDocs(collection(db, "registrations"));

      const regData = regSnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      setRegistrations(regData);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleShortlist = async (id, currentStatus) => {
    try {
      await updateDoc(doc(db, "registrations", id), {
        shortlisted: !currentStatus,
      });

      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const sendEmail = async (reg) => {
    try {
      await emailjs.send(
        "service_z0sc5so",
        "template_zsy4h8t",
        {
          name: reg.name,
          email: reg.email,
          event_name: eventsMap[reg.eventId],
        },
        "6t6j1V2Sc9O5oK5sG"
      );

      alert("Email Sent Successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to Send Email");
    }
  };

  const filteredRegistrations =
    selectedEvent === "all"
      ? registrations
      : registrations.filter((reg) => reg.eventId === selectedEvent);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-10 py-20">
      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        Event Registrations
      </h1>

      <div className="mb-10">
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="bg-white/10 border border-white/10 rounded-xl p-4 text-white"
        >
          <option value="all">All Events</option>

          {Object.entries(eventsMap).map(([id, title]) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6">
        {filteredRegistrations.map((reg) => (
          <div
            key={reg.id}
            className="bg-white/10 p-6 rounded-2xl border border-white/10"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  {reg.name}
                </h2>

                <p className="text-cyan-400 mt-1">
                  Event: {eventsMap[reg.eventId] || "Deleted Event"}
                </p>

                <p className="text-gray-300 mt-2">
                  Email: {reg.email}
                </p>

                <p className="text-gray-300">
                  Phone: {reg.phone}
                </p>

                <p className="text-gray-300">
                  Branch: {reg.branch}
                </p>

                <p className="text-gray-300">
                  Year: {reg.year}
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() =>
                    toggleShortlist(reg.id, reg.shortlisted)
                  }
                  className={`px-6 py-3 rounded-xl font-semibold ${
                    reg.shortlisted
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-cyan-500 hover:bg-cyan-400"
                  }`}
                >
                  {reg.shortlisted ? "Shortlisted" : "Shortlist"}
                </button>

                {reg.shortlisted && (
                  <button
                    onClick={() => sendEmail(reg)}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold"
                  >
                    Send Email
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationsAdmin;