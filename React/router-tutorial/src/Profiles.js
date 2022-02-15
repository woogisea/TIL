import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profiles/jaewook">jaewook</Link>
        </li>
        <li>
          <Link to="/prfiles/gildong">gildong</Link>
        </li>
      </ul>
      <Route to="/profiles/:username" element={<Profile />} />
    </div>
  );
}

export default Profiles;
