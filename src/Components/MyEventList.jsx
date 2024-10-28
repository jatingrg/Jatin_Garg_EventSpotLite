import React, { useState } from "react";
import { useEvents } from "./Context/EventsContext";
import { useAuth } from "./Context/FakeAuthContext";
import Modal from "./Modal"; 

const MyEventList = () => {
  const { events } = useEvents();
  const { user } = useAuth();
  
  const yourName = user ? user.email.replace('@example.com', '') : null;
  const filteredEvents = events.filter(event => event.host === yourName);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsFadingOut(false);
      setSelectedEvent(null);
    }, 300); 
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">Your Events</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="p-4">
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                  {event.name}
                </h5>
                <p className="text-slate-600 leading-normal font-light">
                  {event.description}
                </p>
                <button 
                  onClick={() => openModal(event)} 
                  className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
                >
                  Read more
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No events found.</p>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} fadeOut={isFadingOut} />
    </div>
  );
};

export default MyEventList;
