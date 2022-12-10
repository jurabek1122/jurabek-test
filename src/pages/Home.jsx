import HomeCard from '../components/HomeCard'
import  { homeData } from '../assets/data'

const Home = () => {
    return(
        <div className='home'>
            <h3>Пожалуйста, выберите филиал:</h3>
            <div className='cards'>
                {homeData.map(item => <HomeCard key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default Home;