import AvgMonth from "../components/Home/AvgMonth";
import Chart from "../components/Home/Chart";
import { Hero } from "../components/Home/Hero";
import Pillar from "../components/Home/Pillar";
import { Transac } from "../components/Home/Transac";
// import NestedDoughnutChart from "../components/Home/NestedDoughnutChart";
import HomeLayout from "../layout/HomeLayout";

export const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <div className="flex justify-between items-center mt-16">
        <div className="flex flex-col xl:flex-row  justify-between overflow-auto w-full">
          <Chart />

          {/* <NestedDoughnutChart /> */}
        </div>
      </div>
        <Transac />
        <AvgMonth />
        <Pillar />
    </HomeLayout>
  );
};
