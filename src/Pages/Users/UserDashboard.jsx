import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name"); // Default sorting by name

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Sorting the users based on the selected sort order
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
    <div className="max-w-7xl mx-auto p-4 bg-[#eaf2eb] dark:bg-[#2f3630]">
      <h2 className="text-2xl font-bold mb-4 text-[#333] dark:text-white">Users List</h2>

      {/* Search Input */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sort Options */}
      <div className="mb-4 flex gap-2">
        <select
          className="p-2 border rounded bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="city">Sort by City</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-[#3c4a47] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-[#444] border-b">
            <tr>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">NAME</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">EMAIL</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">CONTACT</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">CITY</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-[#444]">
                <td className="px-4 py-2 flex items-center gap-2 text-[#333] dark:text-white">{user.name}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.email}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.phone}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{user.address.city}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#3c4a47] p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-[#333] dark:text-white">User Details</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}</p>
            <p><strong>Company:</strong> {selectedUser.company.name}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Users;
