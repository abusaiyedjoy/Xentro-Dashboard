/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const Sidebar = ({ onLogout, user }) => {
    console.log(user);
    return (
        <aside className="w-[250px] bg-white dark:bg-[#2c2c2c] shadow-md h-full min-h-screen flex-col justify-between">
            <div className="w-[240px]">
                <div className="p-6 text-center relative pt-5">
                    <img
                        src="https://i.ibb.co.com/DLcr2Vk/sam-moghadam-khamseh-yx-ZSAjy-To-P4-unsplash.jpg"
                        alt="Profile"
                        className="w-24 h-24 rounded-full bg-cover bg-center absolute -top-10 left-[50%] transform -translate-x-1/2 border-2 dark:border-gray-800"
                    />
                    <h2 className="text-lg font-semibold mt-10 text-gray-900 dark:text-gray-200">
                        Hey, {user}
                    </h2>
                </div>
                <ul className="space-y-4 p-2 dark:bg-[#232323] rounded-md mx-3 mt-2">
                    <li>
                        <Link
                            to="/profile"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <FaUser className="mr-2" />
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <HiUsers className="mr-2" />
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <RiDashboardHorizontalLine className="mr-2" />
                            Products
                        </Link>
                    </li>

                </ul>
                <div className="space-y-4 dark:bg-[#232323] rounded-md mx-3 mt-6">
                    <div className="p-2">
                        <a
                            href="#"
                            onClick={onLogout}
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#243824]"
                        >
                            <LuLogOut className="mr-2" />
                            Logout
                        </a>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
