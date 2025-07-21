import { useForm } from "react-hook-form";
import Title from "../../../Component/ShareTitle/Title";
import { MdAddBox } from "react-icons/md";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddItems = () => {
  const axiosSecure = useAxios();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const FileList = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingAPI, FileList, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // all menu object post

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `${menuItem.name} the item added`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const menuRes = await axiosSecure.post("/menu", menuItem);
          if (menuRes?.data?.insertedId) {
            reset();
           
          }
          Swal.fire({
            title: "Added!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };
  return (
    <section>
      <Title heading="---What's new?---" subheading="ADD AN ITEM"></Title>
      <div className="mx-0 md:mx-10 lg:mx-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-black space-y-5 p-10 bg-gray-200"
        >
          {/* recipe name */}
          <div className="w-full">
            <label
              htmlFor="name"
              className="text-[15px] dark:text-slate-300 text-text font-[400]"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Recipe name"
              className="border-border bg-white dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            />
          </div>
          {/* category section and price section */}
          <div className="flex flex-col md:flex-row gap-5 items-center">
            {/* category section */}
            <div className="w-full">
              <label
                htmlFor="category"
                className="text-[15px] dark:text-slate-300 text-text font-[400]"
              >
                Category name <span className="text-red-500">*</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={"select a category"}
                className="border-border bg-white dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
              >
                <option disabled={false}>Select a category</option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"desert"}>Dessert</option>
                <option value={"Drinks"}>Drinks</option>
              </select>
            </div>
            {/* price section */}
            <div className="w-full">
              <label
                htmlFor="price"
                className="text-[15px] dark:text-slate-300 text-text font-[400]"
              >
                Price <span className="text-red-500">*</span>
              </label>
              <input
                {...register("price", { required: true, maxLength: 10 })}
                type="text"
                name="price"
                id="price"
                placeholder="Your name"
                className="border-border bg-white dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>
          {/* text details */}
          <div className="w-full">
            <label
              htmlFor="description"
              className="font-[400] dark:text-[#abc2d3] text-[15px] text-text"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("recipe")}
              id="description"
              placeholder="Write something about"
              className="border-border bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-primary transition-colors duration-300"
            />
          </div>
          {/* file input */}
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input bg-amber-300"
            />{" "}
            <br />
          </div>
          <button
            className="flex items-center gap-1 cursor-pointer text-[1rem] text-white py-1 px-2 rounded-md border 
             bg-gradient-to-r from-[#835d23] to-[#b58130] 
             hover:from-amber-200 hover:bg-amber-300 transition-all duration-300"
            type="submit"
          >
            submit
            <MdAddBox className="text-xl" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
