import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

import useAxios from "../../Hooks/useAxios";
import useCards from "../../Hooks/useCards";

const OurShop = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = useAxios();

  const { user } = useAuth();
  const [, refetch] = useCards();

  const handleAddItem = () => {
    if (user && user.email) {
      const cardItem = {
        menuId: _id,
        email: user.email,
        name: name,
        image: image,
        price: price,
      };

      axiosSecure.post("/cards", cardItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your food${name} added`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch item
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login?",
        text: "Please login and add to card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-gray-100 relative  shadow-sm text-black mb-10">
      <figure className=" h-[250px]">
        <img className="w-full" src={image} alt="salad" />
      </figure>
      <button className="absolute top-4 right-4 p-1 text-white bg-black">
        ${price}
      </button>
      <div className="card-body flex items-center gap-5">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddItem}
            className="btn bg-gray-200 shadow-md text-yellow-500 hover:bg-black uppercase"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
