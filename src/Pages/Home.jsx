/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "./../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { Outlet } from "react-router-dom";

const Home = ({ onLogout, user }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div
      className={`${darkMode ? "dark" : "light"
        } bg-gray-100 dark:bg-[#242424] min-h-screen`}
    >
      <div className="min-h-[1000px] lg:min-h-screen px-4 bg-gray-100 dark:bg-[#242424] text-gray-800 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between max-w-[1450px] mx-auto items-center mb-6 py-3">
          <div className="flex justify-center items-center gap-3">
            {/* Toggle Sidebar */}
            <button className="cursor-pointer"
              onClick={() => setShowSidebar((prev) => !prev)}>
              {showSidebar ? <RxCross2 size={20} /> : <TfiMenuAlt size={20} />}
            </button>

            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="">
              {darkMode ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <BsMoonStars size={20} />
              )}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row justify-between relative gap-4 my-12 max-w-[1450px] mx-auto">
          {/* Sidebar */}
          {showSidebar && (
            <div className="lg:static lg:block absolute top-0 left-0 z-50 bg-gray-100 dark:bg-[#242424] lg:bg-transparent">
              <Sidebar onLogout={onLogout} user={user} />
            </div>
          )}

          {/* Tasks Section */}
          <div className="w-full">
            <Outlet onLogout={onLogout} user={user}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
