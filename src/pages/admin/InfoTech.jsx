import AdminSidebar from "../../components/AdminSidebar"
import { DoughnutChart, LineChart, PieChart } from "../../components/Charts"
import { useData } from "../../contexts/getData";


const InfoTech = () => {

  const { data } = useData();
  const it = data.filter((i) => i.sector === "Information Technology");

  const robot = it.filter((i) => i.topic === "robot").length;
  const ai = it.filter((i) => i.topic === "artificial intelligence").length;
  const software = it.filter((i) => i.topic === "software").length;
  const other = it.filter((i) => i.topic !== "software" && i.topic !== "robot" && i.topic !== "artificial intelligence").length;

  const china = it.filter((i) => i.country === "China").length;
  const otherCountry = it.filter((i) => i.country !== "China").length;

  const dates = it.filter((i) => i.added && i.intensity);
  const Jan = dates.filter((i) => i.added.startsWith("Jan")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const Feb = dates.filter((i) => i.added.startsWith("Feb")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Mar = dates.filter((i) => i.added.startsWith("Mar")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Apr = dates.filter((i) => i.added.startsWith("Apr")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const May = dates.filter((i) => i.added.startsWith("May")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Jun = dates.filter((i) => i.added.startsWith("Jun")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Jul = dates.filter((i) => i.added.startsWith("Jul")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Aug = dates.filter((i) => i.added.startsWith("Aug")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Sep = dates.filter((i) => i.added.startsWith("Sep")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Oct = dates.filter((i) => i.added.startsWith("Oct")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Nov = dates.filter((i) => i.added.startsWith("Nov")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const Dec = dates.filter((i) => i.added.startsWith("Dec")).map((i) => i.intensity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <div className="admin-container">
      <AdminSidebar />
      <section className="charts">
        <h1>Information Technology</h1>
        <div>
          <PieChart
            data={[robot, ai, software, other]}
            backgroundColor={["hsl(110,80%,40%)",
              "hsl(19,80%,40%)",
              "hsl(69,80%,40%)",
              "hsl(300,80%,40%)",]}
            labels={["robot", "ai", "software", "other"]}
            offset={[0, 0, 0, 50]}
          />
          <h2>IT Sector</h2>
        </div>
        <div>
          <DoughnutChart
            data={[china, otherCountry]}
            backgroundColor={["hsl(110,80%,40%)",
              "hsl(19,80%,40%)"]}
            labels={["china", "other"]}
            offset={[0, 80]}
          />
          <h2>Different Countries</h2>
        </div>
        <div>
          <LineChart
            data={[Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec]}
            label={"Intensity"}
            bgColor={"green"}
            borderColor={"blue"}
            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
          />
          <h2>Year 2016</h2>
        </div>
      </section>
    </div>
  )
}

export default InfoTech
