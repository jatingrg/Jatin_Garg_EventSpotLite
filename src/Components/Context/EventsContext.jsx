import React, { createContext, useContext, useEffect, useState } from 'react';

const EventsContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'https://repeated-nonchalant-spandex.glitch.me/events'; 

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await fetch(apiUrl); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); 

  const addEvent = async (newEvent) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error('Failed to add event');
      }

      const data = await response.json();
      setEvents((prev) => [...prev, data]);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      setEvents((prev) => prev.filter((event) => event.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventsContext.Provider value={{ events, loading, error, addEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

const useEvents = () => {
  return useContext(EventsContext);
};

export { useEvents };
