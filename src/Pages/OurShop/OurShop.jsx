import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopImg from "../../assets/shop/banner2.jpg";
import PageCover from "../../Component/ShareTitle/PageCover";
import { useEffect, useState } from "react";
import UseMenu from "../../Hooks/UseMenu";

import ShareOurShop from "../../Component/ShareTitle/ShareOurShop"


import "./OurShop.css"
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurShop = () => {
  const [menu] = UseMenu();

  const {category} = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");


// dynamic title
useEffect(() => {
   document.title = "Bistro Boss | OurShop";
}, [])
  return (
    <section>
      <div>
        <PageCover
          img={shopImg}
          title={"our shop"}
          subTitle={"Would you like to try a dish?"}
        ></PageCover>
      </div>
      <div className="container mx-auto px-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-black uppercase my-20 space-x-10 flex-col text-center">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {salad.map(item => <ShareOurShop key={item._id} item={item}></ShareOurShop>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pizza.map(item => <ShareOurShop key={item._id} item={item}></ShareOurShop>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {soup.map(item => <ShareOurShop key={item._id} item={item}></ShareOurShop>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {desert.map(item => <ShareOurShop key={item._id} item={item}></ShareOurShop>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {drinks.map(item => <ShareOurShop key={item._id} item={item}></ShareOurShop>)}
            </div>
          </TabPanel>
          
        </Tabs>
      </div>
    </section>
  );
};

export default OurShop;
