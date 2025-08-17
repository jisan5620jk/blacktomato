

const OurTripCard = ({ imageUrl, duration, title, description, buttonText }) => {
  return (
    <div className="our-trip-box relative overflow-hidden group">
      {/* Image */}
      <picture>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </picture>

      {/* Static content */}
      <div className="px-6 py-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">{duration}</h3>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-6">
        <h2 className="text-xl font-bold mb-2 transform transition-all duration-300 group-hover:-translate-y-4 text-center">
          {title}
        </h2>
        <p className="text-sm text-center mb-4">{description}</p>
        <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default OurTripCard;
