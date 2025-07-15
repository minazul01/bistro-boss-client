import { useEffect } from "react";
import { Helmet } from "react-helmet-async";



const Contact = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Contact";
  }, []);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      hello contact!!
    </div>
  );
};

export default Contact;
