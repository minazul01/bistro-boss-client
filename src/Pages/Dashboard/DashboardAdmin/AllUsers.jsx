import { useQuery } from "@tanstack/react-query";
import Title from "../../../Component/ShareTitle/Title";
import useAxios from "../../../Hooks/useAxios";

import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { data: user, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   delete users
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
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   users update
  const handleMakeUser = (user) => {
    console.log(user)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Changed!",
              text: "Your user roll has been changed.",
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
        heading={"---How many??---"}
        subheading={"MANAGE ALL USERS"}
      ></Title>
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto md:table-fixed text-center">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {user?.map((item, index) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="mask h-12 w-12">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">
                  {
                    item.role === "admin" ? 'Admin' : <button
                    onClick={() => handleMakeUser(item)}
                    className="text-2xl btn btn-lg bg-[#D1A054] hover:bg-gray-200"
                  >
                    <FaUsers />
                  </button>
                  }
                </td>
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

export default AllUsers;
