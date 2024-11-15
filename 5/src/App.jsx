import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gorest.co.in/public/v2/users",
        {
          name,
          email,
          gender,
          status,
        },
        {
          headers: {
            Authorization:
              "Bearer 8a77324c3a4b6d4d6043a0e9f8b4a0e25fc0ca5f0705c0378526270006e8b09d",
          },
        }
      );
      alert("User registered successfully!");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Register New User</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Gender</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium">Status</label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded"
        >
          Register User
        </button>
      </form>
    </div>
  );
}

export default App;
