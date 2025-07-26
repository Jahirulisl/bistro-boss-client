import SectionTitle from "../../../Components/Section/SectionTitle";
//for sowiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
//from react rating st>
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
//from react rating E>


const Testimunials = () => {
  const [revews, setReviews] = useState([]);
  useEffect(() => {
    fetch('Rivews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <section className="my-20">
      <SectionTitle subHeading="what our client say "
        heading="Testimonius">

      </SectionTitle>
      {/* {revews.length} */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          revews.map(review => <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center mx-24 my-16">
              {/* from react rating start */}

              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              {/* from react rating end */}

              <p className="py-8">{review.details}</p>
              <h3 className="text-3xl text-orange-500">{review.name}</h3>
            </div>
            <div>
              
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimunials;