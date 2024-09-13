import { AiFillFileText, AiFillInfoCircle, AiFillPieChart, AiFillSliders, AiOutlineStock } from "react-icons/ai";
import { FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiBarChart2Fill, RiBarChart2Line, RiCoinFill, RiCoinsFill, RiCoupon2Fill, RiDashboardFill, RiLineChartFill, RiLineChartLine, RiShoppingBag3Fill, RiStockFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = [
  {
    text: "Dashboard",
    icon: RiDashboardFill,
    path: "/admin/dashboard",
  },
  {
    text: "Products",
    icon: RiShoppingBag3Fill,
    path: "/admin/products",
  },
  {
    text: "Customer",
    icon: IoIosPeople,
    path: "/admin/customer",
  },
  {
    text: "Transaction",
    icon: AiFillFileText,
    path: "/admin/transaction",
  },
];

const chartItems = [
  {
    text: "Pie",
    icon: AiFillPieChart,
    path: "/admin/chart/pie",
  },
  {
    text: "Bar",
    icon: RiBarChart2Fill,
    path: "/admin/chart/bar",
  },
  {
    text: "Line",
    icon: RiLineChartLine,
    path: "/admin/chart/line",
  }
];

const appItems = [
  {
    text: "Stop Watch",
    icon: FaStopwatch,
    path: "/admin/app/stopwatch",
  },
  {
    text: "Coupon",
    icon: RiCoupon2Fill,
    path: "/admin/app/coupon",
  },
  {
    text: "Toss",
    icon: RiCoinsFill,
    path: "/admin/app/toss",
  }
]

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h1>Logo.</h1>
      <div>
        <h5>Dashboard</h5>
        <ul>
          {SidebarItem.map((item, index) => (
            <Link to={item.path} key={index} className="text-decoration-none">
              <li
                style={{
                  backgroundColor: location.pathname.includes(item.path)
                    ? "rgba(0, 115, 255, 0.1)"
                    : "",
                }}
              >
                <item.icon />
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          {chartItems.map((item, index) => (
            <Link to={item.path} key={index} className="text-decoration-none">
              <li
                style={{
                  backgroundColor: location.pathname.includes(item.path)
                    ? "rgba(0, 115, 255, 0.1)"
                    : "",
                }}
              >
                <item.icon />
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          {appItems.map((item, index) => (
            <Link to={item.path} key={index} className="text-decoration-none">
              <li
                style={{
                  backgroundColor: location.pathname.includes(item.path)
                    ? "rgba(0, 115, 255, 0.1)"
                    : "",
                }}
              >
                <item.icon />
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
