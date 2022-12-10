import { price_details } from '../assets/data'
import NavControl from '../components/NavControl'
import { Link, useParams } from 'react-router-dom'


const PriceDetails = () => {

    const { prices } = useParams()

    return(
        <div className='prices'>
            <h3>{prices}</h3>
            <div>
                {price_details.map((item, i) => <Link key={i}>
                    <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.10959 12.1686C0.703029 9.32325 1.39999 6.47787 3.66513 4.1708C5.77539 2.03677 8.83428 0.402585 12.4546 1.21006C15.3974 1.86372 17.2947 3.92087 18.0691 4.97827C18.2433 5.20898 18.5918 5.20898 18.7661 4.97827C19.5598 3.94009 21.4378 1.88295 24.3805 1.21006C28.0009 0.402585 31.0598 2.03677 33.17 4.1708C38.8813 9.93846 34.5639 19.0706 28.3106 23.281C25.7357 25.0113 21.825 27.7605 20.0051 29.5293C19.4824 30.0291 19.0565 30.4905 18.7467 30.8558C18.5724 31.0481 18.2821 31.0481 18.1078 30.8558C17.7981 30.4905 17.3721 30.0291 16.8494 29.5293C15.0295 27.7798 11.0994 25.0305 8.54389 23.281C6.35619 21.8006 4.7493 20.2818 3.37473 17.9555" stroke="#312783" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.92188 15.1679H7.05232L8.58176 12.707L10.6533 18.2632L13.0927 5.93959L15.8999 21.8968L19.4041 12.1302L21.495 18.3016L23.3536 15.1679H28.1355" stroke="#312783" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.136 16.6867C28.9804 16.6867 29.665 16.0067 29.665 15.1679C29.665 14.3291 28.9804 13.649 28.136 13.649C27.2915 13.649 26.6069 14.3291 26.6069 15.1679C26.6069 16.0067 27.2915 16.6867 28.136 16.6867Z" fill="#312783"/>
                    </svg>
                    <p>{item.title}</p>
                </Link>)}
            </div>
            <NavControl />
        </div>
    )
}

export default PriceDetails;