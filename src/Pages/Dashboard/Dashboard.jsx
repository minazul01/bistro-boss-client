import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Dashboard";
  }, []);
  return <div>dashboard!</div>;
};

export default Dashboard;
