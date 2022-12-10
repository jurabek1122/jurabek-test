import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { score_service } from "../assets/data";
import { Link } from 'react-router-dom'
import NavControl from "../components/NavControl"
import Modal from "../components/Modal"

const ScoreService = () => {

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});

  const modalOspen = (item) => {
    setOpenModal(true)
    setData(item)
  }
  return (
    <div className="score">
      <h3>Оценки услуг</h3>
      <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
      >
        {score_service.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='score-card'>
              <img src={item.image} alt='image' />
              <p>{item.title}</p>
              <span>
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 2L24.4078 12.6983L36.5 14.4139L27.75 22.7414L29.8156 34.5L19 28.9483L8.18441 34.5L10.25 22.7414L1.5 14.4139L13.5922 12.6983L19 2Z" stroke="#312783" stroke-width="3" stroke-linejoin="round"/>
                </svg>
                <p>{item.ball}</p>
              </span>
              <Link onClick={() => modalOspen(item)} >Оставить оценку</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavControl />
      <Modal 
        data={data}
        open={openModal} 
        onClose={() => setOpenModal(false)} 
      />
    </div>
  );
};

export default ScoreService;