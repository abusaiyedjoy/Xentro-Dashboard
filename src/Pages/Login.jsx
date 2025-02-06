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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#2f3630] to-[#4e5b58] text-gray-100">
      <div className="bg-[#2d3330] rounded-lg shadow-lg w-full sm:w-96 p-8">
        <h2 className="text-3xl font-semibold text-center text-green-400 mb-6">Please Login</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-md bg-gray-700 border-2 border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-gray-700 border-2 border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        
        <div className="text-center mt-4 text-sm text-gray-400">
          <p className="mb-2">Username: <span className="font-semibold">admin</span></p>
          <p>Password: <span className="font-semibold">12345</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
