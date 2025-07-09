import { useEffect, useState } from "react";
import Title from "../ShareTitle/Title";
import MenuItem from "../ShareTitle/MenuItem";
import UseMenu from "../../Hooks/UseMenu";

const Popular = () => {
  const [menu] = UseMenu();
  const popular = menu?.filter((item) => item?.category === "popular");
  return (
    <section>
      <div>
        <Title heading="---Check it out---" subheading="FROM OUR MENU"></Title>
      </div>
      {popular && popular.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {popular.map((item) => (
              <MenuItem key={item?._id} item={item} />
            ))}
          </div>
          <div className="text-center">
            <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
              View full menu
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg my-10">
          No items found.
        </p>
      )}
    </section>
  );
};

export default Popular;
