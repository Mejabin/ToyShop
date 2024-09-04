
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-500 bg-opacity-70 p-4 flex justify-between items-center shadow-md">
      <div className="text-white text-2xl font-bold">
        <Link to="/Home" className="hover:text-gray-200">Toy Shop</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search toys..."
          className="p-2 rounded-md border-none outline-none"
        />
        <Link
          to="/login"
          className="text-white hover:bg-pink-700 hover:text-white px-4 py-2 rounded-md transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-white hover:bg-pink-700 hover:text-white px-4 py-2 rounded-md transition duration-300"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
