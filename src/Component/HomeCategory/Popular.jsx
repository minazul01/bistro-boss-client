import { useEffect, useState } from "react";
import Title from "../ShareTitle/Title";
import MenuItem from "../ShareTitle/MenuItem";


const Popular = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === "popular");
            setData(popular);
        })
    }, [])
    return (
       <section>
            <div>
                <Title heading="---Check it out---" subheading="FROM OUR MENU">

                </Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    data.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="py-2 px-4 bg-white border-b-2 rounded-md uppercase text-black hover:text-yellow-300 mb-10 hover:bg-black cursor-pointer">View full menu</button>
            </div>
       </section>
    );
};

export default Popular;