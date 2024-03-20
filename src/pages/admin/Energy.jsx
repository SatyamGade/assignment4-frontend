import AdminSidebar from '../../components/AdminSidebar';
import { BarChart, DoughnutChart, LineChart, PieChart } from '../../components/Charts';
import { useData } from '../../contexts/getData';

const Energy = () => {

    const { data } = useData();
    const energy = data.filter((i) => i.sector === "Energy");

    const oil = energy.filter((i) => i.topic === "oil").length;
    const gas = energy.filter((i) => i.topic === "gas").length;
    const coal = energy.filter((i) => i.topic === "coal").length;
    const biofuel = energy.filter((i) => i.topic === "biofuel").length;
    const other = energy.filter((i) => i.topic !== "consumption" && i.topic !== "oil" && i.topic !== "gas" && i.topic !== "coal" && i.topic !== "biofuel").length;

    const usa = energy.filter((i) => i.country === "United States of America").length;
    const russia = energy.filter((i) => i.country === "Russia").length;
    const saudi = energy.filter((i) => i.country === "Saudi Arabia").length;
    const otherCountry = energy.filter((i) => i.country !== "United States of America" && i.country !== "Russia" && i.country !== "Saudi Arabia").length;

    const world = energy.filter((i) => i.region === "World").length;
    const sasia = energy.filter((i) => i.region === "Southern Asia").length;
    const wasia = energy.filter((i) => i.region === "Western Asia").length;

    const dates = energy.filter((i) => i.added && i.intensity);
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
                <h1>Energy</h1>
                <div>
                    <PieChart
                        data={[other, oil, gas, coal, biofuel]}
                        backgroundColor={[`hsl(219, 80%, 40%)`, `hsl(19, 80%, 40%)`, `hsl(69, 80%, 40%)`, `hsl(300, 80%, 40%)`, `rgb(53, 162, 255)`, `hsl(411, 80%, 40%)`]}
                        labels={["other", "oil", "gas", "coal", "biofuel"]}
                        offset={[0, 20, 30, 40, 50]}
                    />
                    <h2>Energy Sector</h2>
                </div>
                <div>
                    <BarChart
                        horizontal={true}
                        data_1={[world, sasia, wasia]}
                        title_1={""}
                        bgColor_1={`hsl(180, 40%, 50%)`}
                        labels={["Other", "Southern Asia", "Western Asia"]}
                    />
                    <h2>Acroos World</h2>
                </div>
                <div>
                    <DoughnutChart
                        data={[usa, russia, saudi, otherCountry]}
                        backgroundColor={[`hsl(10, 80%, 80%)`, `hsl(10, 80%, 50%)`, `hsl(10, 40%, 50%)`, `hsl(10, 40%, 70%)`]}
                        labels={["usa", "russia", "saudi", "other"]}
                        offset={[0, 20, 30, 40]}
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

export default Energy
