import { useEffect } from "react";
import { Helmet } from "react-helmet";

const OurMenu = () => {
  useEffect(() => {
    document.title = "Bistro Boss | menu";
  }, []);
  return <div>our menu!</div>;
};

export default OurMenu;
