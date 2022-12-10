import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { doctors_list } from "../assets/data";
import { useParams, useNavigate } from 'react-router-dom'
import NavControl from "../components/NavControl"

const Doctors = () => {

  const { name, doctors } = useParams()
  const navigate = useNavigate()

  return (
    <div className="doctors">
      <h3>Фотогалерея / {doctors}</h3>
      <Swiper
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {doctors_list.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={() => navigate(`/uslugi/${name}/nashi-vrachi/${doctors}/${item.id}`)} className='doctors-card'>
                <img src={item.image} alt='img' />
                <div className='doctors-info'>
                  <h4>{item.name}</h4>
                  <hr />
                  <p>{item.job}</p>
                  <div>
                  <span>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96875 1.875L10.1234 5.88688L14.9414 6.53021L11.4551 9.65302L12.2781 14.0625L7.96875 11.9806L3.65941 14.0625L4.48242 9.65302L0.996094 6.53021L5.81408 5.88688L7.96875 1.875Z" stroke="#312783" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    <p>{item.score}</p>
                  </span>
                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 4.6875V7.5H10.3125M7.5 14.0625C6.62921 14.0625 6.19382 14.0625 5.82829 14.0144C3.30416 13.6821 1.31793 11.6958 0.985623 9.17171C0.9375 8.80618 0.9375 8.37079 0.9375 7.5C0.9375 6.62921 0.9375 6.19382 0.985623 5.82829C1.31793 3.30416 3.30416 1.31793 5.82829 0.985623C6.19382 0.9375 6.62921 0.9375 7.5 0.9375C8.37079 0.9375 8.80618 0.9375 9.17171 0.985623C11.6958 1.31793 13.6821 3.30416 14.0144 5.82829C14.0625 6.19382 14.0625 6.62921 14.0625 7.5C14.0625 8.37079 14.0625 8.80618 14.0144 9.17171C13.6821 11.6958 11.6958 13.6821 9.17171 14.0144C8.80618 14.0625 8.37079 14.0625 7.5 14.0625Z" stroke="#312783" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{item.graphic}</p>
                  </span>
                </div>
                </div>
            </div>
            <div onClick={() => navigate(`/uslugi/${name}/nashi-vrachi/${doctors}/${item.id}`)} className='doctors-card'>
                <img src={item.image} alt='img' />
                <div className='doctors-info'>
                  <h4>{item.name}</h4>
                  <hr />
                  <p>{item.job}</p>
                  <div>
                  <span>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96875 1.875L10.1234 5.88688L14.9414 6.53021L11.4551 9.65302L12.2781 14.0625L7.96875 11.9806L3.65941 14.0625L4.48242 9.65302L0.996094 6.53021L5.81408 5.88688L7.96875 1.875Z" stroke="#312783" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    <p>{item.score}</p>
                  </span>
                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 4.6875V7.5H10.3125M7.5 14.0625C6.62921 14.0625 6.19382 14.0625 5.82829 14.0144C3.30416 13.6821 1.31793 11.6958 0.985623 9.17171C0.9375 8.80618 0.9375 8.37079 0.9375 7.5C0.9375 6.62921 0.9375 6.19382 0.985623 5.82829C1.31793 3.30416 3.30416 1.31793 5.82829 0.985623C6.19382 0.9375 6.62921 0.9375 7.5 0.9375C8.37079 0.9375 8.80618 0.9375 9.17171 0.985623C11.6958 1.31793 13.6821 3.30416 14.0144 5.82829C14.0625 6.19382 14.0625 6.62921 14.0625 7.5C14.0625 8.37079 14.0625 8.80618 14.0144 9.17171C13.6821 11.6958 11.6958 13.6821 9.17171 14.0144C8.80618 14.0625 8.37079 14.0625 7.5 14.0625Z" stroke="#312783" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{item.graphic}</p>
                  </span>
                </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavControl />
    </div>
  );
};

export default Doctors;