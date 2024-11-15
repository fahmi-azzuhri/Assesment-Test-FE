import React, { useState } from "react";
import data from "./data.json";
function App() {
  const [datas, setDatas] = useState(data);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);
  const [newRecord, setNewRecord] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    ipAddress: "",
  });

  const filteredData = datas.filter((item) =>
    Object.values(item).some((values) =>
      values.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">CRUD Table</h1>
      <input
        type="text"
        className="mb-4 p-2 border rounded"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">First Name</th>
            <th className="border border-gray-300 p-2">Last Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">IP Address</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2">{item.first_name}</td>
              <td className="border border-gray-300 p-2"> {item.last_name}</td>
              <td className="border border-gray-300 p-2"> {item.email} </td>
              <td className="border border-gray-300 p-2"> {item.gender} </td>
              <td className="border border-gray-300 p-2">{item.ip_address}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-4">
        <h2 className="text-xl font-bold mb-2">Add New Record</h2>
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="First Name"
        />
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="Email"
        />
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="Gender"
        />
        <input
          type="text"
          className="border p-2 rounded mb-2"
          placeholder="IP Address"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Record
        </button>
      </div>

      {/* {editing && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Edit Record</h2>
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={editing.first_name}
            onChange={(e) =>
              setEditing({ ...editing, first_name: e.target.value })
            }
          />
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={editing.last_name}
            onChange={(e) =>
              setEditing({ ...editing, last_name: e.target.value })
            }
          />
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={editing.email}
            onChange={(e) => setEditing({ ...editing, email: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={editing.gender}
            onChange={(e) => setEditing({ ...editing, gender: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded mb-2"
            value={editing.ip_address}
            onChange={(e) =>
              setEditing({ ...editing, ip_address: e.target.value })
            }
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={saveEdit}
          >
            Save
          </button>
        </div>
      )} */}
    </div>
  );
}

export default App;
