import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Requests from '../../services';
import Skeleton from '../skeleton';

import './goods.scss';
import nutsBlack from '../../resources/image/svg/nuts_black.svg'


export default function Goods() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        Requests.allData(`https://62f8d7563eab3503d1dc1d9a.mockapi.io/coffeehouse?page=${id}&limit=1`).then((d) => {
            setData(...d);
            setLoad(false);
        });
    }, []);

    const elem = load ? <Skeleton style={{width: "100%"}}/> : <Elem data={data}/>

    return (
        <section className='goods'>
            <div className="limit">
                {elem}
            </div>
        </section>
    )
}

function Elem({data}) {
    const {img, country, description, price} = data;

    return (
        <>
            <div className="image">
                <img src={img} alt="goods4"/>
            </div>
            <div className="content">
                <h3>About it</h3>
                <div className="decor"><img src={nutsBlack} alt="nuts"/></div>
                <p className="country"><span>Country:</span> {country}</p>
                <p className="description"><span>Description:</span> {description}</p>
                <pre className="price">Price:   <span>{price}$</span></pre>
            </div>
        </>
    )
}