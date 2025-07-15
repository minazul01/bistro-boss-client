import Swal from "sweetalert2";
import Title from "../../../Component/ShareTitle/Title";
import useCards from "../../../Hooks/useCards";

import { MdDelete } from "react-icons/md";
import useAxios from "../../../Hooks/useAxios";


const Card = () => {
  const [card, refetch] = useCards();
  const totalPrice = card?.reduce?.((sum, item) => sum + item.price, 0) || 0;

  const axiosSecure = useAxios();
  //   delete card item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cards/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  };

  return (
    <section>
      <Title heading={"---My Cart---"} subheading={"WANNA ADD MORE?"}></Title>
      <div className="container mx-auto flex justify-around items-center mb-5 uppercase bg-white text-black">
        <h3 className="text-[1rem] font-bold">
          Total orders:{card?.length || 0}
        </h3>
        <h3 className="text-[1rem] font-bold">total price: ${totalPrice}</h3>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto md:table-fixed text-center">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {card?.map((item, index) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt="item" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs text-red-500 text-[1.5rem]"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Card;
