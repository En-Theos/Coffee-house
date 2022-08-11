import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Requests from '../../services';
import Skeleton from '../skeleton';

import './goods.scss';
import nutsBlack from '../../resources/image/svg/nuts_black.svg'


export default function Goods(props) {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    let url = '';
    // eslint-disable-next-line default-case
    switch (props.location) {
        case 'ForYourPleasurePage':
            url = 'goods2';
            break;
        case 'OurCoffeePage':
            url = 'goods';
            break;
    }

    useEffect(() => {
        Requests.allData(`https://62f4ebd9ac59075124c71074.mockapi.io/${url}/${id}`).then((d) => {
            setData(d);
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