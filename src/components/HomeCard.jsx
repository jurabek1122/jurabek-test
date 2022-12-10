import { Link } from 'react-router-dom';

const HomeCard = ({ item }) => {
    return(
        <Link to={`/uslugi${item.path}`} className='home-card'>
            <img src={item.image} alt='image' />
            <h3>{item.title}</h3>
            <div className='address'>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6875 13.125C19.6875 14.3331 18.7081 15.3125 17.5 15.3125C16.2919 15.3125 15.3125 14.3331 15.3125 13.125C15.3125 11.9169 16.2919 10.9375 17.5 10.9375C18.7081 10.9375 19.6875 11.9169 19.6875 13.125Z" stroke="#312783" stroke-width="2" stroke-linejoin="round"/>
                <path d="M6.5625 14.0423C6.5625 7.12702 11.1198 2.1875 17.5 2.1875C23.8802 2.1875 28.4375 7.12702 28.4375 14.0423C28.4375 21.1733 22.8455 27.6631 17.5 31.7188C12.1545 27.6631 6.5625 21.1733 6.5625 14.0423Z" stroke="#312783" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <p>{item.address}</p>
            </div>
        </Link>
    )
}

export default HomeCard;