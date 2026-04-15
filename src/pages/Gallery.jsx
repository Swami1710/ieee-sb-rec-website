import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  const dummyGallery = [
    {
      id: "1",
      title: "Pichstrom 2026",
      subtitle: "Innovation Pitching Competition",
      date: "10 April 2026",
      coverImage:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  ];

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const q = query(
        collection(db, "gallery"),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);

      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (data.length > 0) {
        setGalleryItems(data);
      } else {
        setGalleryItems(dummyGallery);
      }
    } catch (err) {
      console.error("Gallery Fetch Error:", err);
      setGalleryItems(dummyGallery);
    } finally {
      setLoading(false);
    }
  };

  const featuredEvent = galleryItems[0];

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[160px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12 text-center">
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-4">
          IEEE REC SONBHADRA
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Our Journey In
          <span className="block text-cyan-400">Frames</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-10">
          Capturing the moments where innovation met collaboration,
          leadership, and unforgettable memories.
        </p>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            ["50+", "Events"],
            ["5000+", "Participants"],
            ["1000+", "Memories"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl py-5 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {value}
              </h3>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOADING */}
      {loading ? (
        <div className="text-center text-cyan-400 text-xl py-20">
          Loading Gallery...
        </div>
      ) : (
        <>
          {/* FEATURED EVENT */}
          {featuredEvent && (
            <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-8">
              <div
                onClick={() => setSelectedAlbum(featuredEvent)}
                className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-cyan-400/10 group"
              >
                <img
                  src={featuredEvent.coverImage}
                  alt={featuredEvent.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-cyan-400 mb-3 text-sm uppercase tracking-[0.3em]">
                    Featured Memory
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold mb-3">
                    {featuredEvent.title}
                  </h2>

                  <p className="text-gray-300 max-w-xl mb-4">
                    {featuredEvent.subtitle}
                  </p>

                  <button className="w-fit px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition">
                    Explore Album
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* GALLERY GRID */}
          <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-14">
            <div className="grid md:grid-cols-3 gap-8">
              {galleryItems.slice(1).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedAlbum(item)}
                  className="group cursor-pointer relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-cyan-300 text-xs">
                    {item.images?.length || 0} Photos
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 p-6">
                    <p className="text-cyan-400 text-sm mb-2">
                      {item.date}
                    </p>

                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen px-6 py-12 flex justify-center">
              <motion.div
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 40 }}
                className="max-w-6xl w-full bg-[#0f172a] rounded-3xl border border-white/10 p-8"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-cyan-400 mb-2">
                      {selectedAlbum.date}
                    </p>

                    <h2 className="text-4xl font-bold mb-2">
                      {selectedAlbum.title}
                    </h2>

                    <p className="text-gray-400">
                      {selectedAlbum.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedAlbum(null)}
                    className="px-4 py-2 rounded-xl bg-red-500/20 text-red-300"
                  >
                    Close
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {selectedAlbum.images?.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt=""
                      whileHover={{ scale: 1.03 }}
                      className="w-full h-64 object-cover rounded-2xl border border-white/10"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}