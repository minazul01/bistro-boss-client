import Title from "../ShareTitle/Title";
import MenuImg from "../../assets/home/featured.jpg";

const OurMenu = () => {
  // date today
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", // e.g., Monday
    year: "numeric",
    month: "long", // e.g., July
    day: "numeric",
  });
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(21, 21, 21, 0.7)), url(${MenuImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-[#151515B3] py-10 bg-fixed"
    >
      <section>
        <div>
          <Title
            heading="---Check it out---"
            subheading="FROM OUR MENU"
          ></Title>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 pb-30">
          {/* Image Section */}
          <div className="w-full max-w-md">
            <img className="w-full rounded-md" src={MenuImg} alt="banner" />
          </div>

          {/* Text + Button Section */}
          <div className="text-white w-full max-w-md flex flex-col justify-center items-center text-center p-4">
            <p className="text-justify leading-relaxed text-sm md:text-base">
              <span>{today}</span>, <br /> WHERE CAN I GET SOME? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Error voluptate facere,
              deserunt dolores maiores quod nobis quas quasi. Eaque repellat
              recusandae ad laudantium tempore consequatur consequuntur omnis
              ullam maxime tenetur.
            </p>
            <button className="mt-6 py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 hover:bg-black cursor-pointer">
              read more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
