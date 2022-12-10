import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { doctors_data } from "../assets/data";
import { useParams, useNavigate } from 'react-router-dom'
import NavControl from "../components/NavControl"

const OurDoctors = () => {

  const { name } = useParams()
  const navigate = useNavigate()

  return (
    <div className="our-doctors">
      <h3>Фотогалерея</h3>
      <Swiper
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {doctors_data.map((item, i) => (
          <SwiperSlide key={i}>
            <div onClick={() => navigate(`/uslugi/${name}/nashi-vrachi/${item.title}`)} className='our-doctors-card'>
                {item.image}
                <p>{item.title}</p>
            </div>
            <div onClick={() => navigate(`/uslugi/${name}/nashi-vrachi/${item.title}`)} className='our-doctors-card'>
                {item.image}
                <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavControl />
    </div>
  );
};

export default OurDoctors;