import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { foto_data } from "../assets/data";
import { useParams } from 'react-router-dom'
import NavControl from "../components/NavControl"
import FotoModal from "../components/FotoModal"

const GalereyaDetails = () => {

  const { galery } = useParams()

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});

  const modalOspen = (item) => {
    setOpenModal(true)
    setData(item)
  }

  return (
    <div className="galery-foto">
      <h3>Фотогалерея / {galery}</h3>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {foto_data.map((item, i) => (
          <SwiperSlide key={i}>
            <div onClick={() => modalOspen(item)} className='foto-card'>
                <img src={item.image} alt='' />
            </div>
            <div onClick={() => modalOspen(item)} className='foto-card'>
                <img src={item.image} alt='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavControl />
      <FotoModal 
        data={data}
        open={openModal} 
        onClose={() => setOpenModal(false)} 
      />
    </div>
  );
};

export default GalereyaDetails;