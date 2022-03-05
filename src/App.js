import React, { useEffect } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import { useState } from "react";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {}, []);
  return (
    <AuthContext.Provider
      value={{
        authUser,
        logout: () => setAuthUser(null),
      }}
    >
      {!authUser && <Login />}
      {authUser && <ChatRoom />}
    </AuthContext.Provider>
  );
}

export default App;
