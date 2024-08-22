import { FiSearch } from 'react-icons/fi';

const MapComponent = () => {
  return (
    <div className="relative h-screen">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046837.2653082367!2d-3.6734112595738226!3d7.896163117267965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGhana!5e0!3m2!1sen!2sgh!4v1724206213865!5m2!1sen!2sgh"
        width="100%"
        height="80%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="sticky "
      ></iframe>

      {/* Search Controls */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-lg shadow-md mt-4 w-11/12 max-w-4xl">
        <div className="flex flex-wrap justify-between items-center space-y-2 sm:space-y-0">
          <input
            type="text"
            placeholder="Search Location"
            className="border p-2 rounded-lg w-full sm:w-auto flex-grow"
          />
          <select className="border p-2 rounded-lg w-full sm:w-auto">
            <option>All</option>
            <option>House</option>
            <option>Apartment</option>
          </select>
          <button className="bg-red-500 text-white p-2 rounded-lg flex items-center w-full sm:w-auto">
            <FiSearch className="mr-2 " />
            Find Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
