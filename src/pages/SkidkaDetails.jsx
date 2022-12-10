import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import NavControl from "../components/NavControl"
import skidka2 from '../assets/images/skidka2.png'
import { skidka_details, skidka_data } from '../assets/data'

const SkidkaDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setData(skidka_data.filter(item => item.id *1 !== id*1))
    }, [id])

    console.log(data)

    return(
        <div className='skidka-details'>
            <h3>{skidka_details.title}</h3>
            <p>{skidka_details.text}</p>
            <h3 style={{marginTop: '30px'}}>Другие акции</h3>
            <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={skidka2} alt="image" className='skidka-img'/>
            <p style={{width: '300px'}}>{item.title}</p>
            <div className='skidka-info'>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37504 9.46289L9.37512 9.375M1.875 7.87502L1.87501 12.1089C1.87501 13.052 1.87501 13.5236 1.98409 13.9659C2.08079 14.358 2.24019 14.7319 2.45613 15.0732C2.69973 15.4582 3.03997 15.7847 3.72045 16.4378L12.6342 24.9925C14.1215 26.4199 14.8652 27.1336 15.7137 27.3959C16.4602 27.6266 17.2602 27.6184 18.0019 27.3724C18.8448 27.0928 19.5736 26.3639 21.0314 24.9062L24.9062 21.0313C26.3639 19.5736 27.0928 18.8447 27.3724 18.0018C27.6185 17.2602 27.6267 16.4602 27.3959 15.7137C27.1337 14.8652 26.4199 14.1215 24.9925 12.6341L16.4379 3.72045C15.7848 3.03996 15.4583 2.69972 15.0733 2.45612C14.732 2.24017 14.3581 2.08078 13.966 1.98408C13.5237 1.875 13.0521 1.875 12.1089 1.875L7.875 1.875C5.7748 1.875 4.7247 1.875 3.92253 2.28373C3.21692 2.64325 2.64324 3.21693 2.28372 3.92254C1.87499 4.72471 1.87499 5.77481 1.875 7.87502Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              {item.skidka} %
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavControl />
        </div>
    )
}

export default SkidkaDetails;