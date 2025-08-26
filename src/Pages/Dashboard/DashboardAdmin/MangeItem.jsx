import Swal from "sweetalert2";
import Title from "../../../Component/ShareTitle/Title";
import { FaEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
import useAxios from "../../../Hooks/useAxios";
import UseMenu from "../../../Hooks/UseMenu";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, , refetch] = UseMenu();

  const axiosSecure = useAxios();
  //   delete card item
  const handleDelete = (item) => {
    // console.log(item._id);
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <section>
      <Title
        heading={"---Hurry Up!---"}
        subheading={"MANAGE ALL ITEMS"}
      ></Title>
      <div className="container mx-auto flex  items-start mb-5 uppercase bg-white text-black">
        <h3 className="text-[2rem] font-bold">
          Total orders:{menu?.length || 0}
        </h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto md:table-fixed text-center">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Item manage</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Update</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {menu?.map((item, index) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-20">
                        <img src={item.image} alt="item" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price}</td>
                {/* Update btn */}
                <td className="px-4 py-2">
                  <Link to={`/dashboard/admin/manage/update_item/${item?._id}`}
                    
                    className="btn btn-ghost btn-xs text-red-500 text-[1.5rem]"
                  >
                    <FaEdit />
                  </Link>
                </td>
                {/* Delete btn */}
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(item)}
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

export default ManageItem;
