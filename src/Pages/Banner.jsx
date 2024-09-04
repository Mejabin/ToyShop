import cover from "./../assets/Images/cover.jpg";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center text-white p-8 flex items-center justify-center h-64"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h1 className="text-4xl font-bold">Welcome to Our Toy Store</h1>
    </div>
  );
};

export default Banner;
