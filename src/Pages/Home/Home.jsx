import { Helmet } from "react-helmet-async";
import Contacts from "../Shard/Contacts/Contacts";
import Banner from "./Banner/Banner";
import Catogory from "./Catogory/Catogory";
import Dailog from "./Dailogs/Dailog";
import Faetured from "./Featureds/Faetured";
import PopularManu from "./PopularManu/PopularManu";
import Testimunials from "./Testimoniuls/Testimunials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catogory></Catogory>
      <Dailog></Dailog>
      <PopularManu></PopularManu>
      <Contacts></Contacts>
      <Faetured></Faetured>
      <Testimunials></Testimunials>
    </div>
  );
};

export default Home;