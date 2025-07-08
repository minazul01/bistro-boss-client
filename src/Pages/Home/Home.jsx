import { Helmet } from "react-helmet";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/HomeCategory/Category";
import SubCategory from "../../Component/HomeCategory/SubCategory";
import Popular from "../../Component/HomeCategory/Popular";
import Salad from "../../Component/HomeCategory/Salad";
import OurMenu from "../../Component/HomeCategory/OurMenu";
import Rating from "../../Component/HomeCategory/Rating";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistro boss | Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-10/12 mx-auto">
        <Category />
        <SubCategory />
        <Popular />
        <Salad />
      </div>
      <OurMenu />
      <div className="max-w-10/12 mx-auto">
         <Rating />
      </div>
    </div>
  );
};

export default Home;
