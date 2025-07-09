import { Parallax, Background } from "react-parallax";

const PageCover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="background img"
      strength={-200}
    >
      <div className="hero w-full max-w-[600px] md:max-w-[1450px] mx-auto h-[300px] md:h-[600px] px-4 md:px-20 pb-24 md:pb-[100px] pt-30 md:pt-[170px] my-10">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-[2rem] font-bold uppercase">{title}</h1>
            <p className="mb-5 w-full md:w-1/2 mx-auto">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;
