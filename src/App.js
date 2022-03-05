import React, { useEffect } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import { useState } from "react";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContext";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLATOMAS_t-TLsuwsRwZJzxZe5rStXsGU",
  authDomain: "dima-ben-project.firebaseapp.com",
  projectId: "dima-ben-project",
  storageBucket: "dima-ben-project.appspot.com",
  messagingSenderId: "17483853397",
  appId: "1:17483853397:web:1ba52acf4b0184345e6edc",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [messages, setMessages]=useState("")

 

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then((snap) => {
        return snap.docs.map((doc) => doc.data());
      })
      .then((messages) => {
        setMessages(messages);
      });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authUser,
        logout: () => setAuthUser(null),
      }}
    >
      {authUser && <Login />}
      {!authUser && <ChatRoom messages={messages}/>}
    </AuthContext.Provider>
  );
}

export default App;
