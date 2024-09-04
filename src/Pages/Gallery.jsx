
import img1 from "./../assets/Images/cute-couple-pink-teddy-bear-love-valenti.webp";
import img2 from "./../assets/Images/toy1.jpeg";
import img3 from "./../assets/Images/toy2jpeg.jpeg";

const Gallery = () => {
  const images = [img1, img2, img3];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
