import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("https://gorest.co.in/public/v2/users");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Users Table</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (
            <tr key={users.id}>
              <td className="border border-gray-300 px-4 py-2">{users.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {users.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {users.gender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
