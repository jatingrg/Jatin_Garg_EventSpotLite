import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Shared/Layout';
import EventList from './Components/EventList';
import MyEvents from './Components/MyEvents';
import { EventProvider } from './Components/Context/EventsContext';
import Login from './Components/Login';
import { AuthProvider } from './Components/Context/FakeAuthContext';
import Logout from './Components/Logout';
import Profile from './Components/Profile';


export default function App() {
  return (
    <AuthProvider>
      
    <EventProvider>

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
      
        <Route index element={<EventList />} />
        <Route path="myevent" element={<MyEvents />} />
      
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Route>
      </Routes>
    </Router>
    </EventProvider>
    </AuthProvider>

  );
}
