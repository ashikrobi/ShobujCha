import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./LoginForm.css";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import form_page from "../../images/form_page.jpg";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginForm = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  //using context to access user information here
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorMessage, email);
      });
  };
  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch((error) => {
          var errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log("signed in user info", res.user);
          const { displayName, email } = res.user;
          const signedInUser = { name: displayName, email: email };
          setLoggedInUser(signedInUser);
          history.replace(from);
        })
        .catch((error) => {
          var errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    event.preventDefault();
  };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <img
          style={{ minHeight: "85vh" }}
          className="img-fluid"
          src={form_page}
          alt=""
        />
      </div>
      <div id="form-container" className="col-md-5">
        <form onSubmit={handleSubmit}>
          {newUser && (
            <div class="mb-3">
              <label for="userName" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                class="form-control"
                id="userName"
              />
            </div>
          )}
          <div className="mt-5 mb-5 text-center">
            <h2 className="mb-5 display-4">
              Shobuj<span className="text-success">Cha</span>
            </h2>
            <h5 className="text-secondary">Welcome to ShobujCha</h5>
          </div>
          <div class="mb-3">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onBlur={handleBlur}
              class="form-control"
              id="inputEmail"
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              class="form-control"
              id="inputPassword"
            />
          </div>
          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>
              'Account {newUser ? "created" : "Logged In"} successfully'
            </p>
          )}
          <div>
            <button type="submit" class="btn btn-success">
              {newUser ? "Sign Up" : "Sing In"}
            </button>
            <p>
              Don't have an account?{" "}
              <p
                onClick={() => setNewUser(!newUser)}
                class="text-success d-inline"
                id="create-account"
              >
                Create an account
              </p>
            </p>
          </div>
        </form>
        <br />
        <p class="text-center">Or</p>
        <div>
          <button
            onClick={handleGoogleSignIn}
            class="border border-1 rounded-pill text-center btn btn-success"
          >
            <FontAwesomeIcon className="ml-3 mr-3" icon={faGoogle} />
            <span className="mr-3">Continue With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
