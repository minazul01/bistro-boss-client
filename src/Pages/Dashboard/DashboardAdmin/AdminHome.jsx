import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { IoCardOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaTruckPickup } from "react-icons/fa";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const axiosSecure = useAxios();

  // admin info load
  const { data } = useQuery({
    queryKey: ["admin-info"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-info");
      return res.data;
    },
  });
  // payment done all item how many sell
  const { data: order } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order");
      return res.data;
    },
  });
  // customize barChart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // piChart customize
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * radius);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * radius);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const chartData = order?.map((chart) => {
    return { name: chart._id, value: chart.revenue };
  });

  return (
    <div>
      <h3 className="text-4xl text-black my-5">Hi, Welcome Back!!</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        <div className="stats bg-gradient-to-r from-purple-500 via-[#C143F6] to-[#F4C7FE] text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IoCardOutline className="text-[2rem] text-black" />
            </div>
            <div className="text-[1rem]">Revenue</div>
            <div className="stat-value">${data?.revenue}</div>
          </div>
        </div>
        <div className="stats bg-gradient-to-r from-[#D5A55B] via-[#FCE7BF] to-[#F4C7FE] text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <HiUserGroup className="text-[2rem] text-black" />
            </div>
            <div className="text-[1rem]">Customers</div>
            <div className="stat-value">{data?.user}</div>
          </div>
        </div>
        <div className="stats bg-gradient-to-r from-[#FE4D84] via-[#FECCE8] to-[#F4C7FE] text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdOutlineProductionQuantityLimits className="text-[2rem] text-black" />
            </div>
            <div className="text-[1rem]">Products</div>
            <div className="stat-value">{data?.menuItem}</div>
          </div>
        </div>
        <div className="stats bg-gradient-to-r from-[#6CB0FF] via-[#AFF1FF] to-[#F4C7FE] text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaTruckPickup className="text-[2rem] text-black" />
            </div>
            <div className="text-[1rem]">Orders</div>
            <div className="stat-value">{data?.orderItem}</div>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="flex flex-col md:flex-row w-full">
        {/* barChart */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <BarChart
            width={300}
            height={300}
            data={order}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {order?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
            <Legend></Legend>
          </BarChart>
        </div>
        {/* piChart */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <PieChart width={300} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData?.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
