import { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Contact";
  }, []);
  return (
    <div>
      hello contact!!
    </div>
  );
};

export default Contact;
