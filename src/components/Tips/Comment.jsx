import React, { useState } from "react";

function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Angga Sasongko",
      message: "Maju terus Eratani!",
      date: "2 hari yang lalu",
      avatar: "https://via.placeholder.com/40",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    const newComment = {
      id: comments.length + 1,
      name: "Pengguna Baru", // Simulasi nama pengguna
      message: comment,
      date: "Baru saja", // Simulasi waktu
      avatar: "https://via.placeholder.com/40", // Simulasi avatar
    };

    setComments([newComment, ...comments]); // Tambahkan komentar baru di atas
    setComment(""); // Kosongkan input
  };

  return (
    <div className="max-w-lg p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Komentar</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex gap-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="Tambahkan Komentar..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-2">
          <p>Masuk untuk menambahkan komentar.</p>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
          >
            Kirim
          </button>
        </div>
      </form>

      <hr className="py-3" />

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <img
              src={comment.avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-700">{comment.message}</p>
              <div className="text-sm text-gray-500">{comment.date}</div>
              <div className="flex gap-4 text-sm text-blue-600 mt-1">
                <button className="hover:underline">Suka</button>
                <button className="hover:underline">Balas</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
