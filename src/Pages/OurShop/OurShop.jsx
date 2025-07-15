import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopImg from "../../assets/shop/banner2.jpg";
import PageCover from "../../Component/ShareTitle/PageCover";
import { useEffect, useState } from "react";
import UseMenu from "../../Hooks/UseMenu";
import ShareOurShop from "../../Component/ShareTitle/ShareOurShop";
import "./OurShop.css";
import { Helmet } from "react-helmet";


const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

const OurShop = () => {

  const [data] = UseMenu();


  // Category wise items
  const categoryItems = categories.reduce((acc, cat) => {
    acc[cat] = data.filter((item) => item.category?.toLowerCase() === cat);
    return acc;
  }, {});

  // Manage perPage and page number for each category
  const [perPageItem, setPerPageItem] = useState(6);
  const [currentPages, setCurrentPages] = useState({
    salad: 0,
    pizza: 0,
    soup: 0,
    dessert: 0,
    drinks: 0,
  });

  const handlePerPage = (e) => {
    const val = parseInt(e.target.value);
    setPerPageItem(val);

    // Reset all current pages to 0 when per page changes
    setCurrentPages({
      salad: 0,
      pizza: 0,
      soup: 0,
      dessert: 0,
      drinks: 0,
    });
  };

  const changePage = (cat, direction) => {
    setCurrentPages((prev) => {
      const total = Math.ceil(categoryItems[cat].length / perPageItem);
      const newPage =
        direction === "prev"
          ? Math.max(prev[cat] - 1, 0)
          : Math.min(prev[cat] + 1, total - 1);
      return { ...prev, [cat]: newPage };
    });
  };

  const goToPage = (cat, page) => {
    setCurrentPages((prev) => ({ ...prev, [cat]: page }));
  };

  useEffect(() => {
    document.title = "Bistro Boss | Our Shop";
  }, []);

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | our shop</title>
      </Helmet>
      <PageCover
        img={shopImg}
        title={"Our Shop"}
        subTitle={"Would you like to try a dish?"}
      />

      <div className="container mx-auto px-4 md:px-10">
        <Tabs>
          <TabList className="text-black uppercase my-10 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Tab key={cat}>{cat}</Tab>
            ))}
          </TabList>
          {categories.map((cat) => {
            const items = categoryItems[cat] || [];
            const currentPage = currentPages[cat];
            const totalPages = Math.ceil(items.length / perPageItem);
            const paginatedItems = items.slice(
              currentPage * perPageItem,
              currentPage * perPageItem + perPageItem
            );

            return (
              <TabPanel key={cat}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedItems.map((item) => (
                    <ShareOurShop key={item._id} item={item} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="w-full text-center mt-10 mb-20 text-black space-y-3">

                  <div className="flex justify-center items-center flex-wrap gap-2">
                    <button
                      onClick={() => changePage(cat, "prev")}
                      className="btn cursor-pointer"
                      disabled={currentPage === 0}
                    >
                      Prev
                    </button>

                    {[...Array(totalPages).keys()].map((page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(cat, page)}
                        className={
                          currentPage === page ? "btn btn-primary" : "btn"
                        }
                      >
                        {page + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => changePage(cat, "next")}
                      className="btn cursor-pointer"
                      disabled={currentPage === totalPages - 1}
                    >
                      Next
                    </button>

                    <select
                      value={perPageItem}
                      onChange={handlePerPage}
                      className="border rounded px-2 py-1"
                    >
                      <option value="3">3</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default OurShop;
