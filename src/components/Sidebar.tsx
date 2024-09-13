import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
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
    icon: FaChartPie,
    path: "/admin/chart/pie",
  },
  {
    text: "Bar",
    icon: FaChartBar,
    path: "/admin/chart/bar",
  },
  {
    text: "Line",
    icon: FaChartLine,
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
    icon: RiCoupon3Fill,
    path: "/admin/app/coupon",
  },
  {
    text: "Toss",
    icon: FaGamepad,
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
                    color: location.pathname.includes(item.path) ? "rgb(0, 115, 255)" : "black",
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
                    color: location.pathname.includes(item.path) ? "rgb(0, 115, 255)" : "black",
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
                    color: location.pathname.includes(item.path) ? "rgb(0, 115, 255)" : "black",
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