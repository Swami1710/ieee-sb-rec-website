import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

function RegisterEvent() {
  const { eventId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "registrations"), {
        ...formData,
        eventId,
        registeredAt: new Date(),
      });

      alert("Registration Successful!");
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-white/10 p-8 rounded-3xl">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          Event Registration
        </h1>

        <div className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-4 rounded bg-black/30 text-white" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-4 rounded bg-black/30 text-white" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-4 rounded bg-black/30 text-white" />
          <input name="branch" placeholder="Branch" onChange={handleChange} className="w-full p-4 rounded bg-black/30 text-white" />
          <input name="year" placeholder="Year" onChange={handleChange} className="w-full p-4 rounded bg-black/30 text-white" />

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold"
          >
            Submit Registration
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterEvent;