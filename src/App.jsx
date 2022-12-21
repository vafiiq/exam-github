import React from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Overview from "./pages/Overview";
import Repostory from "./pages/Repostory";
import Project from "./pages/Project";
import Packegs from "./pages/Packegs";
import Stars from "./pages/Stars";
import Error from "./pages/NotFound";
import Follower from "./pages/Follower";
import UserList from "./pages/UserList";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/" element={<Overview />} />
          <Route path="/repostory/:user_name" element={<Repostory />} />
          <Route path="/project" element={<Project />} />
          <Route path="/packegs" element={<Packegs />} />
          <Route path="/star" element={<Stars />} />
          <Route path="/follower/:user_name" element={<Follower />} />
        </Route>
        <Route path="/userlist" element={<UserList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
