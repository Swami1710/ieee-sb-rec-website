import { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('events');

  // Registrations
  const [registrations, setRegistrations] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  // Events
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Gallery
  const [galleryTitle, setGalleryTitle] = useState('');
  const [gallerySubtitle, setGallerySubtitle] = useState('');
  const [galleryDate, setGalleryDate] = useState('');
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [editingGalleryId, setEditingGalleryId] = useState(null);

  useEffect(() => {
    fetchRegistrations();
    fetchGalleryList();
  }, []);

  const fetchRegistrations = async () => {
    const snap = await getDocs(collection(db, 'registrations'));
    setRegistrations(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const fetchGalleryList = async () => {
    const snap = await getDocs(collection(db, 'gallery'));
    setGalleryList(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'ieee_events_upload');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dgf8u1qz6/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const uploadMultipleToCloudinary = async (files) => {
    const urls = [];

    for (const file of files) {
      const url = await uploadImageToCloudinary(file);
      urls.push(url);
    }

    return urls;
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin-login');
  };

  // EVENTS
  const handleAddEvent = async () => {
    if (!title || !date || !description || !imageFile) {
      return alert('Fill all fields');
    }

    const imageUrl = await uploadImageToCloudinary(imageFile);

    await addDoc(collection(db, 'events'), {
      title,
      date,
      description,
      imageUrl,
      createdAt: new Date(),
    });

    setTitle('');
    setDate('');
    setDescription('');
    setImageFile(null);

    alert('Event Added');
  };

  // GALLERY
  const handleAddGallery = async () => {
    if (!galleryTitle || !gallerySubtitle || !galleryDate) {
      return alert('Fill all fields');
    }

    try {
      if (editingGalleryId) {
        const payload = {
          title: galleryTitle,
          subtitle: gallerySubtitle,
          date: galleryDate,
        };

        if (galleryFiles.length > 0) {
          const urls = await uploadMultipleToCloudinary(galleryFiles);
          payload.coverImage = urls[0];
          payload.images = urls;
        }

        await updateDoc(doc(db, 'gallery', editingGalleryId), payload);

        alert('Gallery Updated');
      } else {
        if (galleryFiles.length === 0) {
          return alert('Upload Images');
        }

        const urls = await uploadMultipleToCloudinary(galleryFiles);

        await addDoc(collection(db, 'gallery'), {
          title: galleryTitle,
          subtitle: gallerySubtitle,
          date: galleryDate,
          coverImage: urls[0],
          images: urls,
          createdAt: new Date(),
        });

        alert('Gallery Added');
      }

      setGalleryTitle('');
      setGallerySubtitle('');
      setGalleryDate('');
      setGalleryFiles([]);
      setEditingGalleryId(null);

      fetchGalleryList();
    } catch (err) {
      console.error(err);
      alert('Operation Failed');
    }
  };

  const deleteGalleryItem = async (id) => {
    if (!window.confirm('Delete Gallery?')) return;
    await deleteDoc(doc(db, 'gallery', id));
    fetchGalleryList();
  };

  // REGISTRATION
  const updateStatus = async (reg, status) => {
    await updateDoc(doc(db, 'registrations', reg.id), { status });
    fetchRegistrations();
  };

  const deleteRegistration = async (id) => {
    await deleteDoc(doc(db, 'registrations', id));
    fetchRegistrations();
  };

  const bulkDelete = async () => {
    for (const id of selected) {
      await deleteDoc(doc(db, 'registrations', id));
    }
    setSelected([]);
    fetchRegistrations();
  };

  const sendShortlistEmail = async (reg) => {
    await emailjs.send(
      'service_z0sc5so',
      'template_9x8wlcu',
      {
        to_name: reg.name,
        to_email: reg.email,
        event_name: reg.eventTitle,
      },
      '6t6j1V2Sc9O5oK5sG'
    );

    alert('Mail Sent');
  };

  const exportCSV = () => {
    const rows = filteredRegs.map((r) => ({
      Name: r.name,
      Email: r.email,
      Event: r.eventTitle,
      Status: r.status || 'Pending',
    }));

    const headers = Object.keys(rows[0]);

    const csv = [
      headers.join(','),
      ...rows.map((row) => headers.map((h) => row[h]).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'registrations.csv';
    a.click();
  };

  const filteredRegs = useMemo(() => {
    return registrations.filter((r) => {
      const q = search.toLowerCase();

      const matchesSearch =
        r.name?.toLowerCase().includes(q) ||
        r.email?.toLowerCase().includes(q) ||
        r.eventTitle?.toLowerCase().includes(q);

      const matchesFilter =
        filter === 'All'
          ? true
          : (r.status || 'Pending') === filter;

      return matchesSearch && matchesFilter;
    });
  }, [registrations, search, filter]);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-8">

        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold text-cyan-400">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-xl bg-red-500/20 text-red-300"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button onClick={() => setActiveTab('events')} className="px-6 py-3 rounded-xl bg-white/10">Manage Events</button>
          <button onClick={() => setActiveTab('gallery')} className="px-6 py-3 rounded-xl bg-white/10">Manage Gallery</button>
          <button onClick={() => setActiveTab('registrations')} className="px-6 py-3 rounded-xl bg-white/10">Registrations</button>
        </div>

        {/* EVENTS */}
        {activeTab === 'events' && (
          <div className="bg-white/10 p-8 rounded-3xl space-y-4">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-4 bg-slate-900 rounded-xl" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 bg-slate-900 rounded-xl" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full p-4 bg-slate-900 rounded-xl" />
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
            <button onClick={handleAddEvent} className="w-full py-4 bg-cyan-500 rounded-xl">Add Event</button>
          </div>
        )}

        {/* GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white/10 p-8 rounded-3xl space-y-4">
              <input value={galleryTitle} onChange={(e) => setGalleryTitle(e.target.value)} placeholder="Gallery Title" className="w-full p-4 bg-slate-900 rounded-xl" />
              <input value={gallerySubtitle} onChange={(e) => setGallerySubtitle(e.target.value)} placeholder="Subtitle" className="w-full p-4 bg-slate-900 rounded-xl" />
              <input type="date" value={galleryDate} onChange={(e) => setGalleryDate(e.target.value)} className="w-full p-4 bg-slate-900 rounded-xl" />
              <input type="file" multiple onChange={(e) => setGalleryFiles(Array.from(e.target.files))} />

              <div className="flex gap-4">
                <button onClick={handleAddGallery} className="flex-1 py-4 bg-cyan-500 rounded-xl">
                  {editingGalleryId ? 'Update Gallery' : 'Add Gallery'}
                </button>

                {editingGalleryId && (
                  <button
                    onClick={() => {
                      setEditingGalleryId(null);
                      setGalleryTitle('');
                      setGallerySubtitle('');
                      setGalleryDate('');
                      setGalleryFiles([]);
                    }}
                    className="px-6 py-4 bg-red-500/20 rounded-xl"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {galleryList.map((item) => (
              <div key={item.id} className="bg-white/5 p-4 rounded-2xl flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img src={item.coverImage} className="w-24 h-20 rounded-xl object-cover" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingGalleryId(item.id);
                      setGalleryTitle(item.title);
                      setGallerySubtitle(item.subtitle);
                      setGalleryDate(item.date);
                    }}
                    className="px-4 py-2 bg-blue-500/20 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteGalleryItem(item.id)}
                    className="px-4 py-2 bg-red-500/20 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* REGISTRATIONS */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            <div className="flex gap-4">
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="flex-1 p-4 bg-slate-900 rounded-xl" />

              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-4 bg-slate-900 rounded-xl">
                <option>All</option>
                <option>Pending</option>
                <option>Shortlisted</option>
                <option>Rejected</option>
              </select>

              <button onClick={bulkDelete} className="px-4 py-2 bg-red-500/20 rounded">Bulk Delete</button>
              <button onClick={exportCSV} className="px-4 py-2 bg-green-500/20 rounded">Export CSV</button>
            </div>

            {filteredRegs.map((reg) => (
              <div key={reg.id} className="bg-white/5 p-4 rounded-xl flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(reg.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelected([...selected, reg.id]);
                      } else {
                        setSelected(selected.filter((id) => id !== reg.id));
                      }
                    }}
                  />

                  <div>
                    <h4>{reg.name}</h4>
                    <p>{reg.email}</p>
                    <p>{reg.eventTitle}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => updateStatus(reg, 'Shortlisted')} className="px-3 py-1 bg-blue-500/20 rounded">Shortlist</button>
                  <button onClick={() => updateStatus(reg, 'Rejected')} className="px-3 py-1 bg-yellow-500/20 rounded">Reject</button>

                  {reg.status === 'Shortlisted' && (
                    <button onClick={() => sendShortlistEmail(reg)} className="px-3 py-1 bg-green-500/20 rounded">
                      Send Mail
                    </button>
                  )}

                  <button onClick={() => deleteRegistration(reg.id)} className="px-3 py-1 bg-red-500/20 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}