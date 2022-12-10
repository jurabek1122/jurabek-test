import  { stars } from '../assets/data'

const Stars = () => {
    return(
        <div className='stars'>
            {stars.map((star, i) => <div key={i}>
                <svg width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 2.25L30.7597 15.6229L45.875 17.7674L34.9375 28.1767L37.5195 42.875L24 35.9354L10.4805 42.875L13.0625 28.1767L2.125 17.7674L17.2403 15.6229L24 2.25Z" fill="#312783" stroke="#312783" stroke-width="3" stroke-linejoin="round"/>
                </svg>
                <p>{star.value}</p>
            </div>)}
        </div>
    )
}

export default Stars;