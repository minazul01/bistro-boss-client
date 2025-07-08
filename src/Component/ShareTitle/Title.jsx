const Title = ({ heading, subheading }) => {
  return (
    <div className="lg:w-4/12 mx-auto md:text-black text-center my-20">
      <h2 className="text-2xl text-orange-300 font-normal mb-5">{heading}</h2>
      <h5 className="text-4xl font-medium text-white md:text-black border-y-2">
        {subheading}
      </h5>
    </div>
  );
};

export default Title;
