import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import Title from "../../../Component/ShareTitle/Title";

const PaymentHistory = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const { data: payment, isPending } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);

      return res.data;
    },
  });

  return (
    <section>
      <div>
        {isPending && (
          <div className="h-screen flex justify-center items-center">
            <div className="w-10 h-10 animate-spin rounded-full border-dashed border-8 border-[#3b9df8]"></div>
          </div>
        )}
      </div>
      <Title heading="---At a Glance!---" subheading="payment history"></Title>
      <div>
        <h5 className="text-3xl font-bold text-lime-400 my-5">Total payment Data: {payment?.length}</h5>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Transaction</th>
                <th>Date</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {payment?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>{item?.email}</td>
                  <td>{item?.transactionId}</td>
                  <td>{item?.date}</td>
                  <td>{item?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
