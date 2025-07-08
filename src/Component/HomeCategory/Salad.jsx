import Title from "../ShareTitle/Title";
import Image from "../../assets/home/slide1.jpg";

const Salad = () => {
  return (
    <section>
      <div>
        <Title heading="---Should Try---" subheading="CHEF RECOMMENDS"></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
        {/* salad item 1 */}
        <div className="card bg-gray-100  shadow-sm text-black mb-10">
          <figure className=" h-[250px]">
            <img className="w-full" src={Image} alt="salad" />
          </figure>
          <div className="card-body flex items-center gap-5">
            <h2 className="card-title">Cesar Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-gray-200 shadow-md text-yellow-500 hover:bg-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* salad item 1 */}
        <div className="card bg-gray-100   shadow-sm text-black mb-10">
          <figure className="h-[250px]">
            <img className="w-full" src={Image} alt="salad" />
          </figure>
          <div className="card-body flex items-center gap-5">
            <h2 className="card-title">Cesar Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-gray-200 shadow-md text-yellow-500 hover:bg-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* salad item 1 */}
        <div className="card bg-gray-100   shadow-sm text-black mb-10">
          <figure className=" h-[250px]">
            <img className="w-full" src={Image} alt="salad" />
          </figure>
          <div className="card-body flex items-center gap-5">
            <h2 className="card-title">Cesar Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-gray-200 shadow-md text-yellow-500 hover:bg-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salad;
