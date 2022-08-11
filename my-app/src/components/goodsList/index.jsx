import { useState, useEffect } from 'react';
import Requests from '../../services';

import Skeleton from "../skeleton"

import './goodsList.scss';

export default function GoodsList(props) {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const {controlIf, urlData} = props;

    useEffect(() => {
        Requests.allData(urlData).then((d) => {
            setData(d);
            setLoad(false);
        })
    }, [])

    const card = data.map((item, i) => {
        const country = item.country.length > 19 ? item.country.substr(0, 19)+'...' : item.country,
        name = item.name.length > 26 ? item.name.substr(0, 19)+'...' : item.name;

        return (
            <div className="card" key={item.id}>
                <img src={item.img} alt="goods"/>
                <p className="name">{name}</p>
                <p className="country">{country}</p>
                <p className="price">{item.price}$</p>
            </div>
        )
    });

    const loads = [];
    for (let i = 0; i < 3; i++) {
        loads.push(<Skeleton key={i}/>);
    }

    const elem = load ? loads : card;

    return (
        <section className="goodsList">
            <div className="limit">
                {controlIf ? <Control/> : null}
                <div className="goodsCard">
                    {elem}
                </div>
            </div>
        </section>
    )
}

function Control() {
    return (
        <div className="control">
            <div className="search">
                <label>Lookiing for</label>
                <input type="text" placeholder="start typing here..."/>
            </div>
            <div className="filter">
                <label>Or filter</label>
                <button>Brazil</button>
                <button>Kenya</button>
                <button>Columbia</button>
            </div>
        </div>
    )
}