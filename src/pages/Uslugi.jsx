import { uslugi } from '../assets/data'
import { Link, useParams } from 'react-router-dom'
import NavControl from '../components/NavControl'

const Uslugi = () => {

    const { name } = useParams()

    return(
        <div className="uslugi">
            <div>
                {uslugi.map((item, i) => <Link key={i} to={`/uslugi/${name}${item.path}`}>
                    {item.title}
                </Link>)}
            </div>
            <NavControl />
        </div>
    )
}

export default Uslugi;