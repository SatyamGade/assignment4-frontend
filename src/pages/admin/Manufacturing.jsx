import AdminSidebar from "../../components/AdminSidebar"
import { BarChart, DoughnutChart, LineChart, PieChart } from "../../components/Charts"
import { useData } from '../../contexts/getData';


const Manufacturing = () => {

  const { data } = useData();
  const manufacturing = data.filter((i) => i.sector === "Manufacturing");

  const production = manufacturing.filter((i) => i.topic === "production").length;
  const plastic = manufacturing.filter((i) => i.topic === "plastic").length;
  const clothing = manufacturing.filter((i) => i.topic === "clothing").length;
  const other = manufacturing.filter((i) => i.topic !== "production" && i.topic !== "plastic" && i.topic !== "clothing").length;

  const usa = manufacturing.filter((i) => i.country === "United States of America").length;
  const russia = manufacturing.filter((i) => i.country === "Russia").length;
  const otherCountry = manufacturing.filter((i) => i.country !== "United States of America" && i.country !== "Russia").length;

  const world = manufacturing.filter((i) => i.region === "World").length;
  const sasia = manufacturing.filter((i) => i.region === "Southern Asia").length;
  const namerica = manufacturing.filter((i) => i.region === "Northern America").length;

  const dates = manufacturing.filter((i) => i.added && i.intensity);
  
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
        <h1>Manufacturing</h1>
        <div>
          <PieChart
            data={[production, plastic, clothing, other]}
            backgroundColor={[
              `hsl(110,80%, 80%)`,
              `hsl(110,80%, 50%)`,
              `hsl(110,40%, 50%)`,
              `hsl(110, 40%, 80%)`
            ]}
            labels={["production", "plastic", "clothing", "other"]}
            offset={[0, 0, 50, 50]}
          />
          <h2>Manufacturing Sector</h2>
        </div>
        <div>
          <BarChart
            horizontal={true}
            data_1={[world, sasia, namerica]}
            title_1={""}
            bgColor_1={`hsl(180, 40%, 50%)`}
            labels={["Other", "Southern Asia", "Northern America"]}
          />
          <h2>Acroos World</h2>
        </div>
        <div>
          <DoughnutChart
            data={[usa, russia, otherCountry]}
            backgroundColor={[`hsl(10, 80%, 80%)`, `hsl(10, 80%, 50%)`, `hsl(10, 40%, 70%)`]}
            labels={["usa", "russia", "other"]}
            legends={false}
            offset={[0, 0, 80]}
            cutout={"50%"}
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

export default Manufacturing
