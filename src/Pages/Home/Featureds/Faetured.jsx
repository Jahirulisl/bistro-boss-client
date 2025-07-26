import SectionTitle from "../../../Components/Section/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'

const Faetured = () => {
  return (
    <div className="featured-item  bg-fixed text-white pt-8 my-20" >
      <SectionTitle subHeading="Check jahir out" heading="Featured Item">

      </SectionTitle>
      <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center pb-20 pt-12  px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>julay 20, 2030</p>
          <p className="uppercase">Where can i get some</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos tempore sed sunt laudantium dignissimos cumque, cupiditate quod rem vitae. A ab voluptatum soluta ex? Alias, asperiores! Aperiam eos voluptas quibusdam?</p>
          <button className="btn btn-neutral btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Faetured;