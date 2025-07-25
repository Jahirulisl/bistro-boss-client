import Banner from "./Banner/Banner";
import Catogory from "./Catogory/Catogory";
import Dailog from "./Dailogs/Dailog";
import PopularManu from "./PopularManu/PopularManu";

const Home = () => {
  return (
    <div>
      <Banner></Banner> 
      <Catogory></Catogory>
      {/* <Dailog></Dailog> */}
      <PopularManu></PopularManu>
    </div>
  );
};

export default Home;