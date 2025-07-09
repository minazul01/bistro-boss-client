const OurShop = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-gray-100 relative  shadow-sm text-black mb-10">
      <figure className=" h-[250px]">
        <img className="w-full" src={image} alt="salad" />
      </figure>
      <button className="absolute top-4 right-4 p-1 text-white bg-black">${price}</button>
      <div className="card-body flex items-center gap-5">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">
         {recipe}
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-gray-200 shadow-md text-yellow-500 hover:bg-black uppercase">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
