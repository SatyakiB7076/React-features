

const MediaCard= ({ title, image, description }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden max-h-md">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>

      {/* Watch Button */}
      <div className="p-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MediaCard;


