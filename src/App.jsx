import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { toast } from "react-toastify";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    toast.success("Sign Out Succesful")
  };

  useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedUser = localStorage.getItem("user");
    if (storedAuth === "true" && storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <Home onLogout={handleLogout} user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
