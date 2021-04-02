import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import { useContext, useLayoutEffect, useState } from "react";
import "firebaseui/dist/firebaseui.css";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useLayoutEffect wait for div to be in the DOM
  const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());
  useLayoutEffect(() => {
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: (authresult) => {
          const { displayName, uid } = authresult.user;
          const authUser = {
            uid,
            displayName,
          };
          console.log(authUser);
          authContext.login(authUser);
          return false;
        },
      },
      // Other config options...
    });
  }, [authContext]);
  const signin = async (e) => {
    e.preventDefault();
    // let user = await firebase.signin(email, password);
    // console.log(user);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <div id="firebaseui-auth-container"></div>

      <div>hello world</div>
      <form onSubmit={signin}>
        <p>Create a new Account</p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Create account" />
      </form>
    </div>
  );
};

export default Login;
