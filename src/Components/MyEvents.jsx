import React, { useState } from "react";
import { useEvents } from "./Context/EventsContext";
import MyEventList from "./MyEventList";

const MyEvents = () => {
  const { addEvent } = useEvents();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [host, setHost] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEvent = { name, description, host, location, date };
    addEvent(newEvent);
    setName("");
    setDescription("");
    setHost("");
    setLocation("");
    setDate("");
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="m-5 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border rounded-md p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border rounded-md p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Host"
        value={host}
        onChange={(e) => setHost(e.target.value)}
        required
        className="border rounded-md p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className="border rounded-md p-2 mb-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="border rounded-md p-2 mb-2 w-full"
      />
      <button
        type="submit"
        className="w-full bg-slate-800 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Event
      </button>
    </form>
    <MyEventList/>
    </div>

  );
};

export default MyEvents;
