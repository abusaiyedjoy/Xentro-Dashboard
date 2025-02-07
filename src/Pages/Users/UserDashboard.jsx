import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortOrder === "city") {
      return a.address.city.localeCompare(b.address.city);
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 rounded-md bg-[#eaf2eb] dark:bg-[#2f3630]">
      <h2 className="text-2xl font-bold mb-4 text-green-600">All Users</h2>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">

        {/* Sort Options */}
        <div className="mb-4 flex gap-2 outline-none rounded-md">
          <select
            className="p-2 border rounded-md bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option className="text-gray-800 dark:text-gray-100" value="name">Sort by Name</option>
            <option className="text-gray-800 dark:text-gray-100" value="email">Sort by Email</option>
            <option className="text-gray-800 dark:text-gray-100" value="city">Sort by City</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="mb-4 flex gap-2 w-[300px]">
          <input
            type="text"
            placeholder="🔍 Search by name or email"
            className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-[#3c4a47] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-[#444] border-b">
            <tr>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">NO.</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">NAME</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">EMAIL</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">CONTACT</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">CITY</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-[#444]">
                <td className="px-4 py-2 text-green-600 text-lg font-medium dark:text-green-600">{index+1}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.name}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.email}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.phone}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.address.city}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-green-500 hover:text-green-700 flex items-center gap-1"
                    onClick={() => setSelectedUser(user)}
                  >
                    <FaEye /> View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 px-3 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#3c4a47] p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-600"
              onClick={() => setSelectedUser(null)}
            >
              <IoClose size={24} />
            </button>

            <h3 className="text-2xl font-semibold mb-4 text-[#222] dark:text-white border-b pb-2">
              User Details
            </h3>
            <div className="space-y-2 text-gray-800 dark:text-gray-300">
              <p><strong className="text-green-600 dark:text-green-400">Name:</strong> {selectedUser.name}</p>
              <p><strong className="text-green-600 dark:text-green-400">Username:</strong> {selectedUser.username}</p>
              <p><strong className="text-green-600 dark:text-green-400">Email:</strong> {selectedUser.email}</p>
              <p><strong className="text-green-600 dark:text-green-400">Phone:</strong> {selectedUser.phone}</p>
              <p><strong className="text-green-600 dark:text-green-400">Website:</strong>
                <a
                  href={`https://${selectedUser.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline ml-1"
                >
                  {selectedUser.website}
                </a>
              </p>
              <p><strong className="text-green-600 dark:text-green-400">Address:</strong>
                {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}
              </p>
              <p><strong className="text-green-600 dark:text-green-400">Company:</strong> {selectedUser.company.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Users;
