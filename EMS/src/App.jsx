import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/login"; 
import Employeedashboard from "./components/Dashboard/employeedashboard";
import Admindashboard from "./components/Dashboard/admindashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { fetchTasks } from "./api";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  useEffect(() => {
    fetchTasks().then((data) => console.log("Tasks from backend:", data));
  }, []);

const handleLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setUser(data.user.role);
      setloggedInUserData(data.user);

      localStorage.setItem("token", data.token);
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong");
  }
};



  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <Admindashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <Employeedashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}

      <h1>amitpal</h1>
    </>
  );
};

export default App;
