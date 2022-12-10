import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { galery_data } from "../assets/data";
import { useParams, useNavigate } from 'react-router-dom'
import NavControl from "../components/NavControl"

const FotoGalereya = () => {

  const { name } = useParams()
  const navigate = useNavigate()

  return (
    <div className="galery">
      <h3>Фотогалерея</h3>
      <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        pagination={{ clickable: true }}
      >
        {galery_data.map((item, i) => (
          <SwiperSlide key={i}>
            <div onClick={() => navigate(`/uslugi/${name}/foto-galereya/${item.title}`)} className='galery-card'>
                <img src={item.image} alt='' />
                <p>{item.title}</p>
            </div>
            <div onClick={() => navigate(`/uslugi/${name}/foto-galereya/${item.title}`)} className='galery-card'>
                <img src={item.image} alt='' />
                <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavControl />
    </div>
  );
};

export default FotoGalereya;