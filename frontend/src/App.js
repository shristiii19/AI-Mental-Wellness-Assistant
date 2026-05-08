import { useState } from "react";

import Dashboard from "./Dashboard";
import Signup from "./Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <Signup setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;