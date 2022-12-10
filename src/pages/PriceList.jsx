import NavControl from '../components/NavControl';
import { price_list } from '../assets/data';
import { Link, useParams } from 'react-router-dom'

const PriceList = () => {

    const { name } = useParams()

    return(
        <div className='price-list'>
            <h3>Прайс лист</h3>
            {price_list.map((item, i) => <Link key={i} to={`/uslugi/${name}/price-list/${item.title}`}>
            {item.title}
            </Link>)}
            <NavControl />
        </div>
    )
}

export default PriceList;