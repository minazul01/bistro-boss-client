const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20">
      {/* Image Section */}
      <div className="w-[150px] shrink-0">
        <img
          className="w-full"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt="item"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-medium uppercase">
          {name}{" "}
          <span className="hidden md:inline-block">
            ------------------------
          </span>
        </h2>
        <p className="text-lg font-normal text-gray-500">{recipe}</p>
      </div>

      {/* Price Section */}
      <p className="text-yellow-400 text-lg font-semibold">${price}</p>
    </div>
  );
};

export default MenuItem;
