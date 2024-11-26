import React, { useState } from "react";
import data from "./data.json";
function App() {
  const [datas, setDatas] = useState(data);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);
  const [newDatas, setNewDatas] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });

  const filteredData = datas.filter((item) =>
    Object.values(item).some((values) =>
      values.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const addDatas = () => {
    setDatas([
      ...datas,
      {
        id: datas.length + 1,
        ...newDatas,
      },
    ]);
    setNewDatas({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    });
  };
  const editData = (item) => {
    setEdit(item);
  };

  const saveEdit = () => {
    setDatas(datas.map((item) => (item.id === edit.id ? edit : item)));
    setEdit(null);
  };

  const deleteData = (id) => {
    setDatas(datas.filter((item) => item.id !== id));
  };
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
      <div className="my-4">
        <h2 className="text-xl font-bold mb-2">Add New Record</h2>
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="First Name"
          value={newDatas.first_name}
          onChange={(e) =>
            setNewDatas({ ...newDatas, first_name: e.target.value })
          }
        />
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="Last Name"
          value={newDatas.last_name}
          onChange={(e) =>
            setNewDatas({ ...newDatas, last_name: e.target.value })
          }
        />
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="Email"
          value={newDatas.email}
          onChange={(e) => setNewDatas({ ...newDatas, email: e.target.value })}
        />
        <input
          type="text"
          className="border p-2 rounded mb-2 mr-2"
          placeholder="Gender"
          value={newDatas.gender}
          onChange={(e) => setNewDatas({ ...newDatas, gender: e.target.value })}
        />
        <input
          type="text"
          className="border p-2 rounded mb-2"
          placeholder="IP Address"
          value={newDatas.ip_address}
          onChange={(e) =>
            setNewDatas({ ...newDatas, ip_address: e.target.value })
          }
        />
        <button
          onClick={addDatas}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Record
        </button>
      </div>

      {edit && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Edit Record</h2>
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={edit.first_name}
            onChange={(e) => setEdit({ ...edit, first_name: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={edit.last_name}
            onChange={(e) => setEdit({ ...edit, last_name: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={edit.email}
            onChange={(e) => setEdit({ ...edit, email: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded mb-2 mr-2"
            value={edit.gender}
            onChange={(e) => setEdit({ ...edit, gender: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded mb-2"
            value={edit.ip_address}
            onChange={(e) => setEdit({ ...edit, ip_address: e.target.value })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={saveEdit}
          >
            Save
          </button>
        </div>
      )}
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
                <button
                  onClick={() => editData(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteData(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
