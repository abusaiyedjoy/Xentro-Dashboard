/* eslint-disable react/prop-types */
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      onLogin(username);
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#242424] text-gray-800 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-6 text-green-700"> Username: admin</h2>
      <h2 className="text-xl font-bold mb-6 text-green-700"> Password: 12345</h2>
      <h2 className="text-2xl font-bold mb-6 text-green-700"> Please Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded-md bg-gray-300 dark:bg-gray-600 border-2 border-green-200"
        />
        <input
          type="password"
          placeholder="12345"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-md bg-gray-300 dark:bg-gray-600 border-2 border-green-200"
        />
        <button
          type="submit"
          className="p-2 bg-green-500 font-bold text-white rounded-md hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
