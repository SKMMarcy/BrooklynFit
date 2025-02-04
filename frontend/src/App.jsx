import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';

import UserPage from './pages/User';
import LandingPage from './pages/LandingPage';
import Landing2 from '../src/pages/Landing2';
import Room from './pages/Room';
import Workouts from './pages/Workouts';
import About from './pages/About';
import Event from './pages/EventPageu';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Landing2 />} />
          <Route path="/dev" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/room/:roomid" element={<Room />} />
          <Route path="/event/:eventid" element={<Event />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
