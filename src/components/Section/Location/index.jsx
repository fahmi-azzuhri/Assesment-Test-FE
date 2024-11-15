import React from "react";

function Location() {
  return (
    <div className="flex sm:flex-row justify-center gap-5 flex-col">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.317477575742!2d106.8407547749904!3d-6.2218020937662075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c89e5bb3f7%3A0xf94eba3a38ef8f3b!2sPAKUWON%20TOWER%20-%20CASABLANCA!5e0!3m2!1sid!2sid!4v1731631270992!5m2!1sid!2sid"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full max-w-sm p-8 bg-neutral-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Kritik & Saran
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Nomor Handphone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Pesan Anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}

export default Location;
