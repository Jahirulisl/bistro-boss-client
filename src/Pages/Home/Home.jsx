import Banner from "./Banner/Banner";
import Catogory from "./Catogory/Catogory";
import Dailog from "./Dailogs/Dailog";
import Faetured from "./Featureds/Faetured";
import PopularManu from "./PopularManu/PopularManu";
import Testimunials from "./Testimoniuls/Testimunials";

const Home = () => {
  return (
    <div>
      <Banner></Banner> 
      <Catogory></Catogory>
      <Dailog></Dailog>
      <PopularManu></PopularManu>
      <Faetured></Faetured>
      <Testimunials></Testimunials>
    </div>
  );
};

export default Home;