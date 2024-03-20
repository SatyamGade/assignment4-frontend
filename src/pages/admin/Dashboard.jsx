import AdminSidebar from "../../components/AdminSidebar";
import StickyHeadTable from "../../components/Table";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../../../public/userImg.jpeg"
import { BarChart } from "../../components/Charts";
import { useData } from "../../contexts/getData";

const Dashboard = () => {

  const { data } = useData();

  const Jan_Relevance = data.filter((i) => i.added.startsWith("Jan")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Feb_Relevance = data.filter((i) => i.added.startsWith("Feb")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Mar_Relevance = data.filter((i) => i.added.startsWith("Mar")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Apr_Relevance = data.filter((i) => i.added.startsWith("Apr")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const May_Relevance = data.filter((i) => i.added.startsWith("May")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Jun_Relevance = data.filter((i) => i.added.startsWith("Jun")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Jul_Relevance = data.filter((i) => i.added.startsWith("Jul")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Aug_Relevance = data.filter((i) => i.added.startsWith("Aug")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Sep_Relevance = data.filter((i) => i.added.startsWith("Sep")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Oct_Relevance = data.filter((i) => i.added.startsWith("Oct")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Nov_Relevance = data.filter((i) => i.added.startsWith("Nov")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Dec_Relevance = data.filter((i) => i.added.startsWith("Dec")).map((i) => i.relevance).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const Jan_Likelihood = data.filter((i) => i.added.startsWith("Jan")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Feb_Likelihood = data.filter((i) => i.added.startsWith("Feb")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Mar_Likelihood = data.filter((i) => i.added.startsWith("Mar")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Apr_Likelihood = data.filter((i) => i.added.startsWith("Apr")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const May_Likelihood = data.filter((i) => i.added.startsWith("May")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Jun_Likelihood = data.filter((i) => i.added.startsWith("Jun")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Jul_Likelihood = data.filter((i) => i.added.startsWith("Jul")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Aug_Likelihood = data.filter((i) => i.added.startsWith("Aug")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Sep_Likelihood = data.filter((i) => i.added.startsWith("Sep")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Oct_Likelihood = data.filter((i) => i.added.startsWith("Oct")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Nov_Likelihood = data.filter((i) => i.added.startsWith("Nov")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Dec_Likelihood = data.filter((i) => i.added.startsWith("Dec")).map((i) => i.likelihood).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <div className="dashboardChart">
          <BarChart
            data_1={[Jan_Relevance, Feb_Relevance, Mar_Relevance, Apr_Relevance, May_Relevance, Jun_Relevance, Jul_Relevance, Aug_Relevance, Sep_Relevance, Oct_Relevance, Nov_Relevance, Dec_Relevance]}
            data_2={[Jan_Likelihood, Feb_Likelihood, Mar_Likelihood, Apr_Likelihood, May_Likelihood, Jun_Likelihood, Jul_Likelihood, Aug_Likelihood, Sep_Likelihood, Oct_Likelihood, Nov_Likelihood, Dec_Likelihood]}
            title_1={"Relevance"}
            title_2={"Likelihood"}
            bgColor_1={`hsl(260, 50%, 30%)`}
            bgColor_2={`hsl(360, 90%, 90%)`}
            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
          />
          <h2 style={{textAlign:"center"}}>Year 2016</h2>
        </div>
        <div className="dashboardTable">
          <StickyHeadTable/>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
