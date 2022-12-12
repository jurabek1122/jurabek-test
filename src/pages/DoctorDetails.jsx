import { useState } from 'react';
import { doctor_details } from '../assets/data'
import NavControl from "../components/NavControl"
import ZapisModal from "../components/ZapisModal"
import Modal from "../components/Modal"

const DoctorDetails = () => {

    const [openModal2, setOpenModal2] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({});

    const modalOspen = (item) => {
        setOpenModal(true)
        setData(item)
    }

    return(
        <div className='doctor-details'>
            <div className='doctor-left'>
                <img src={doctor_details.image} />
                <div>
                    <button className='btn1' onClick={() => setOpenModal2(true)}>Записаться</button>
                    <button className='btn2' onClick={() => modalOspen(doctor_details)}>Оставить отзыв </button>
                </div>
            </div>
            <div className='right-side'>
                <h4>{doctor_details.name}</h4>
                <p>{doctor_details.job}</p>
                <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 4.6875V7.5H10.3125M7.5 14.0625C6.62921 14.0625 6.19382 14.0625 5.82829 14.0144C3.30416 13.6821 1.31793 11.6958 0.985623 9.17171C0.9375 8.80618 0.9375 8.37079 0.9375 7.5C0.9375 6.62921 0.9375 6.19382 0.985623 5.82829C1.31793 3.30416 3.30416 1.31793 5.82829 0.985623C6.19382 0.9375 6.62921 0.9375 7.5 0.9375C8.37079 0.9375 8.80618 0.9375 9.17171 0.985623C11.6958 1.31793 13.6821 3.30416 14.0144 5.82829C14.0625 6.19382 14.0625 6.62921 14.0625 7.5C14.0625 8.37079 14.0625 8.80618 14.0144 9.17171C13.6821 11.6958 11.6958 13.6821 9.17171 14.0144C8.80618 14.0625 8.37079 14.0625 7.5 14.0625Z" stroke="#312783" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{doctor_details.graphic}</p>
                </span>
                <div className='doctor-info'>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 18.75V13.75C1.25 12.3693 2.36929 11.25 3.75 11.25H7.5C8.88071 11.25 10 12.3693 10 13.75V18.75M13.75 13.75H16.25C17.6307 13.75 18.75 14.8693 18.75 16.25V18.75M5.625 1.25C7.25629 1.25 8.75 2.5 8.75 4.375C8.75 6.25 7.25629 7.5 5.625 7.5C3.99371 7.5 2.5 6.25 2.5 4.375C2.5 2.5 3.99371 1.25 5.625 1.25ZM15 3.75C13.7331 3.75 12.5 4.74745 12.5 6.25C12.5 7.75255 13.7331 8.75 15 8.75C16.2669 8.75 17.5 7.75255 17.5 6.25C17.5 4.74745 16.2669 3.75 15 3.75Z" stroke="#312783" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                <span>
                    <h6>{doctor_details.patients} +</h6>
                    <p>Пациентов</p>
                </span>
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 2.5H5.25C3.84987 2.5 3.1498 2.5 2.61502 2.77248C2.14462 3.01217 1.76217 3.39462 1.52248 3.86502C1.25 4.3998 1.25 5.09987 1.25 6.5V8.75M6.25 2.5H13.75M6.25 2.5V1.25M6.25 2.5V5M13.75 2.5H14.75C16.1501 2.5 16.8502 2.5 17.385 2.77248C17.8554 3.01217 18.2378 3.39462 18.4775 3.86502C18.75 4.3998 18.75 5.09987 18.75 6.5V8.75M13.75 2.5V1.25M13.75 2.5V5M18.75 8.75V14.75C18.75 16.1501 18.75 16.8502 18.4775 17.385C18.2378 17.8554 17.8554 18.2378 17.385 18.4775C16.8502 18.75 16.1501 18.75 14.75 18.75H5.25C3.84987 18.75 3.1498 18.75 2.61502 18.4775C2.14462 18.2378 1.76217 17.8554 1.52248 17.385C1.25 16.8502 1.25 16.1501 1.25 14.75V8.75M18.75 8.75H1.25" stroke="#312783" stroke-width="2" stroke-linecap="round"/>
                </svg>
                </div>
                <span>
                    <h6>{doctor_details.qualification} +</h6>
                    <p>Лет опыта</p>
                </span>
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2.5L12.7039 7.84917L18.75 8.70695L14.375 12.8707L15.4078 18.75L10 15.9742L4.5922 18.75L5.625 12.8707L1.25 8.70695L7.2961 7.84917L10 2.5Z" stroke="#312783" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                </div>
                <span>
                    <h6>{doctor_details.score}</h6>
                    <p>Рейтинг</p>
                </span>
                </div>
                <div className='about-doctor'>
                    <h4>Образование</h4>
                    <h5>{doctor_details.degree}</h5>
                    <h4>О враче</h4>
                    <p>{doctor_details.about}</p>
                </div>
                <NavControl />
            </div>
            <ZapisModal 
                open={openModal2} 
                onClose={() => setOpenModal2(false)} 
            />
            <Modal 
                data={data}
                open={openModal} 
                onClose={() => setOpenModal(false)} 
            />
        </div>
    )
}

export default DoctorDetails;