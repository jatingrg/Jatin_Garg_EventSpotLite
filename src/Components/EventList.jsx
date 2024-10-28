import React from "react";
import { useEvents } from "./Context/EventsContext";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const EventList = () => {
  const contextValue = useEvents();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFadingOut, setFadingOut] = useState(false);
  const { events, loading, error } = contextValue;
  const { searchTerm } = useOutletContext(); 

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setFadingOut(true);
    setTimeout(() => {
      setModalOpen(false);
      setFadingOut(false);
      setSelectedEvent(null);
    }, 300);
  };

  return (
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
        <p className="text-gray-600">No events found matching your search.</p>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} fadeOut={isFadingOut} />
    </div>
  );
};

export default EventList;
