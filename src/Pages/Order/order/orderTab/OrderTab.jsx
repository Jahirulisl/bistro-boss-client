import FoodCard from "../../../../Components/FoodCard/FoodCard";

//for sowiper instolition start>>
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules start
import { Pagination } from 'swiper/modules';
// import required modules end
import 'swiper/css';
import 'swiper/css/pagination';
//for sowiper instolition end>>


const OrderTab = ({ items }) => {
  //from pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (

    //from order section>
    <div>

      <Swiper
        pagination={Pagination}
        modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10">
            {
              items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;