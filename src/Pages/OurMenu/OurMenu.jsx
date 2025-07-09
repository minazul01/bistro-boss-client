import { useEffect } from "react";
import { Helmet } from "react-helmet";
import pageImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import PageCover from "../../Component/ShareTitle/PageCover";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import drinkImg from "../../assets/menu/banner3.jpg";
import Title from "../../Component/ShareTitle/Title";
import UseMenu from "../../Hooks/UseMenu";

const OurMenu = () => {
  // all menu item filter category
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  useEffect(() => {
    document.title = "Bistro Boss | menu";
  }, []);
  return (
    <section className="">
      <Helmet>
        <title>Bistro Boss | menu</title>
      </Helmet>
      {/* Our menu page cover */}
      <div>
        <PageCover
          img={pageImg}
          title={"OUR MENU"}
          subTitle={"Would you like to try a dish?"}
        ></PageCover>
      </div>
      {/* offered menu */}
      <div className="container mx-auto px-10">
        <Title heading="---Don't miss---" subheading="TODAY'S OFFER"></Title>
        <div>
          {offered && offered.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {offered.map((item) => (
                  <div
                    key={item?._id}
                    className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20"
                  >
                    {/* Image Section */}
                    <div className="w-[150px] shrink-0">
                      <img
                        className="w-full"
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        src={item?.image}
                        alt="item"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-medium uppercase">
                        {item?.name}
                        <span className="hidden md:inline-block">
                          ------------------------
                        </span>
                      </h2>
                      <p className="text-lg font-normal text-gray-500">
                        {item?.recipe}
                      </p>
                    </div>

                    {/* Price Section */}
                    <p className="text-yellow-400 text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No items found.
            </p>
          )}
        </div>
      </div>
      {/* desert item */}
      <div className="container mx-auto px-10">
        <PageCover
          img={desertImg}
          title={"DESSERTS"}
          subTitle={
            "Indulge in our irresistible selection of handcrafted desserts — from creamy cheesecakes to rich chocolate delights, each bite is a sweet escape. Perfectly baked to satisfy every craving."
          }
        ></PageCover>
        <div className="container mx-auto px-10">
          {desert && desert.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {desert.map((item) => (
                  <div
                    key={item?._id}
                    className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20"
                  >
                    {/* Image Section */}
                    <div className="w-[150px] shrink-0">
                      <img
                        className="w-full"
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        src={item?.image}
                        alt="item"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-medium uppercase">
                        {item?.name}
                        <span className="hidden md:inline-block">
                          ------------------------
                        </span>
                      </h2>
                      <p className="text-lg font-normal text-gray-500">
                        {item?.recipe}
                      </p>
                    </div>

                    {/* Price Section */}
                    <p className="text-yellow-400 text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
                  ORDER YOUR FAVORITE FOOD
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No items found.
            </p>
          )}
        </div>
      </div>
      {/* pizza item */}
      <div className="container mx-auto px-10">
        <PageCover
          img={pizzaImg}
          title={"PIZZA"}
          subTitle={
            "Indulge in our irresistible selection of handcrafted desserts — from creamy cheesecakes to rich chocolate delights, each bite is a sweet escape. Perfectly baked to satisfy every craving."
          }
        ></PageCover>
        <div className="container mx-auto px-10">
          {pizza && pizza.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {pizza.map((item) => (
                  <div
                    key={item?._id}
                    className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20"
                  >
                    {/* Image Section */}
                    <div className="w-[150px] shrink-0">
                      <img
                        className="w-full"
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        src={item?.image}
                        alt="item"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-medium uppercase">
                        {item?.name}
                        <span className="hidden md:inline-block">
                          ------------------------
                        </span>
                      </h2>
                      <p className="text-lg font-normal text-gray-500">
                        {item?.recipe}
                      </p>
                    </div>

                    {/* Price Section */}
                    <p className="text-yellow-400 text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
                 ORDER YOUR FAVORITE FOOD
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No items found.
            </p>
          )}
        </div>
      </div>
      {/* salad item */}
      <div className="container mx-auto px-10">
        <PageCover
          img={saladImg}
          title={"SALADS"}
          subTitle={
            "Indulge in our irresistible selection of handcrafted desserts — from creamy cheesecakes to rich chocolate delights, each bite is a sweet escape. Perfectly baked to satisfy every craving."
          }
        ></PageCover>
        <div className="container mx-auto px-10">
          {salad && salad.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {salad.map((item) => (
                  <div
                    key={item?._id}
                    className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20"
                  >
                    {/* Image Section */}
                    <div className="w-[150px] shrink-0">
                      <img
                        className="w-full"
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        src={item?.image}
                        alt="item"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-medium uppercase">
                        {item?.name}
                        <span className="hidden md:inline-block">
                          ------------------------
                        </span>
                      </h2>
                      <p className="text-lg font-normal text-gray-500">
                        {item?.recipe}
                      </p>
                    </div>

                    {/* Price Section */}
                    <p className="text-yellow-400 text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
                 ORDER YOUR FAVORITE FOOD
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No items found.
            </p>
          )}
        </div>
      </div>
      {/* soup item */}
      <div className="container mx-auto px-10">
        <PageCover
          img={soupImg}
          title={"soup"}
          subTitle={
            "Indulge in our irresistible selection of handcrafted desserts — from creamy cheesecakes to rich chocolate delights, each bite is a sweet escape. Perfectly baked to satisfy every craving."
          }
        ></PageCover>
        <div className="container mx-auto px-10">
          {soup && soup.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {soup.map((item) => (
                  <div
                    key={item?._id}
                    className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20"
                  >
                    {/* Image Section */}
                    <div className="w-[150px] shrink-0">
                      <img
                        className="w-full"
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        src={item?.image}
                        alt="item"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-medium uppercase">
                        {item?.name}
                        <span className="hidden md:inline-block">
                          ------------------------
                        </span>
                      </h2>
                      <p className="text-lg font-normal text-gray-500">
                        {item?.recipe}
                      </p>
                    </div>

                    {/* Price Section */}
                    <p className="text-yellow-400 text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
                 ORDER YOUR FAVORITE FOOD
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No items found.
            </p>
          )}
        </div>
      </div>
      {/* drinks item */}
      <div className="container mx-auto px-10">
        <PageCover
          img={drinkImg}
          title={"drinks"}
          subTitle={
            "Indulge in our irresistible selection of handcrafted desserts — from creamy cheesecakes to rich chocolate delights, each bite is a sweet escape. Perfectly baked to satisfy every craving."
          }
        ></PageCover>
        <div className="container mx-auto px-10">
          {drinks && drinks.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {drinks.map((item) => (
                  <div
                    key={item?._id}
                    className="text-black flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 mb-10 md:mb-20"
                  >
                    {/* Image Section */}
                    <div className="w-[150px] shrink-0">
                      <img
                        className="w-full"
                        style={{ borderRadius: "0px 200px 200px 200px" }}
                        src={item?.image}
                        alt="item"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-medium uppercase">
                        {item?.name}
                        <span className="hidden md:inline-block">
                          ------------------------
                        </span>
                      </h2>
                      <p className="text-lg font-normal text-gray-500">
                        {item?.recipe}
                      </p>
                    </div>

                    {/* Price Section */}
                    <p className="text-yellow-400 text-lg font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">
                 ORDER YOUR FAVORITE FOOD
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No items found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
