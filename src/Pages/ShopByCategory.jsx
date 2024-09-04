import  { useState } from "react";
import toy from "./../assets/Images/Math Toys/images (2).jpeg";
import toy1 from "./../assets/Images/Math Toys/math.jpg";
import toy4 from "./../assets/Images/Block/gu.jpg";
import toy5 from "./../assets/Images/Block/pujpg.jpg";
import toy6 from "./../assets/Images/Science/2784-PriamryScience-LabSet_kids_web.webp";
import toy7 from "./../assets/Images/Science/lh5d41yqj9xac2lywz57zd1y0tql.jpeg";

const ShopByCategory = () => {
  const [selectedTab, setSelectedTab] = useState("Math Toys");

  const categories = {
    "Math Toys": [
      {
        picture: toy,
        name: "Abacus",
        price: "$20",
        rating: "4.5",
      },
      {
        picture: toy1,
        name: "Geometry Set",
        price: "$15",
        rating: "4.0",
      },
    ],
    "Language Toys": [
      {
        picture: toy4,
        name: "Alphabet Blocks",
        price: "$25",
        rating: "4.7",
      },
      {
        picture: toy5,
        name: "Story Book",
        price: "$10",
        rating: "4.3",
      },
    ],
    "Science Toys": [
      {
        picture: toy6,
        name: "Microscope Kit",
        price: "$30",
        rating: "4.8",
      },
      {
        picture: toy7,
        name: "Volcano Experiment",
        price: "$22",
        rating: "4.6",
      },
    ],
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedTab(category)}
            className={`px-3 py-2 rounded-lg text-sm md:text-base ${
              selectedTab === category
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories[selectedTab].map((toy, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <img
              src={toy.picture}
              alt={toy.name}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-bold">{toy.name}</h3>
            <p className="text-gray-700">Price: {toy.price}</p>
            <p className="text-gray-700">Rating: {toy.rating}</p>
            <button className="mt-2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm md:text-base">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
