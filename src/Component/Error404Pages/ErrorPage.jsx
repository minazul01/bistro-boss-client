import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <>
      <div
        className="boxShadow px-10 w-full lg:min-h-[600px] py-16 flex flex-col justify-center rounded-xl"
        style={{
          background: "url(https://i.ibb.co/02DvRcV/404.jpg)",
          backgroundSize: "cover"
        }}
      >
        <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-lime-300 w-full lg:w-[50%]">
          Go Home , You’re Drunk!
        </h1>
        <h2 className="text-[1.5rem] sm:text-[3rem] font-[600] text-white w-full lg:w-[50%]">{error.data}</h2>
         <h3 className="text-[1rem] sm:text-[3rem] font-[600] text-lime-500 w-full lg:w-[50%]">{error.statusText}</h3>
        <Link to='/' className="py-3 px-8 w-max rounded-full bg-[#92E3A9] hover:bg-[#4ec46f] text-white mt-5">
          BACK TO HOME
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
