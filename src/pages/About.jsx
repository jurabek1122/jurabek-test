import NavControl from "../components/NavControl"
import { onas_info } from '../assets/data'

const About = () => {
    return(
        <div className='about'>
            <h3>О Нас</h3>
            <p>{onas_info}</p>
            <NavControl />
        </div>
    )
}

export default About;