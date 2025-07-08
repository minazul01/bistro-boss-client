import bgImag from "../../assets/home/chef-service.jpg";

const SubCategory = () => {
  return (
    <div className="relative mb-20">
      {/* Background Image */}
      <div
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImag})` }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-90 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-10 max-w-xl text-center rounded-md shadow-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Bistro Boss
          </h3>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            It features interactive menu displays, image sliders, and a sleek
            reservation system. The project demonstrates clean UI design
            principles, responsive layouts, and dynamic content handling using
            modern frontend tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
