import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
// import { BarChart, DoughnutChart } from "../components/Charts";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="bar">
        <BsSearch />
        <input type="text" placeholder="Search for data, users, docs" />
        <FaRegBell />
        <img src={userImg} alt="User" />
      </div>
      <section className="widgetContainer">
        <WidgetItem
          heading="Revenue"
          value={3400000}
          percentage={40}
          color="rgba(0, 115, 255)"
          amount={true}
        />
        <WidgetItem
          heading="Users"
          value={4000}
          percentage={-14}
          color="rgba(0, 198, 202)"
        />
        <WidgetItem
          heading="Transactions"
          value={23000}
          percentage={80}
          color="rgba(255, 196, 0)"
        />
        <WidgetItem
          heading="Products"
          value={1000}
          percentage={30}
          color="rgba(76 0 255)"
        />
      </section>
      <section className="graphContainer">
        <div className="revenueChart">
        <h2>Revenue & Transaction</h2>
            {/* <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            /> */}
        </div>
      </section>
      <section>
        3
      </section>
    </div>
  )
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percentage: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({ heading, value, percentage, color, amount = false }: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount? `$${value}` : value}</h4>
      {
        percentage >  0 ? <span className="green"><HiTrendingUp/> +{percentage}%{" "}</span> : <span className="red"><HiTrendingDown/> -{Math.abs(percentage)}%{" "}</span> 
      }
    </div>
    <div className="widgetCircle" style={{
      background: `conic-gradient(${color} ${Math.abs(percentage)/100*360}deg, rgb(255, 255, 255) 0)`,
    }}>
      <span color={color}>{percentage}%</span>
    </div>
  </article>
)

export default Dashboard