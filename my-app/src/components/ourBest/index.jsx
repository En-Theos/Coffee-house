import { useState, useEffect } from 'react';
import Requests from '../../services';

import Skeleton from "../skeleton"

import './ourBest.scss';

export default function OurBest() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        Requests.allData("https://62f4ebd9ac59075124c71074.mockapi.io/ourBest").then((d) => {
            setData(d);
            setLoad(false);
        })
    }, [])

    const card = data.map((item, i) => {
        return (
            <div className="card" key={i}>
                <img src={item.img} alt={'goods' + i}/>
                <p className="name">{item.name}</p>
                <p className="price">{item.price}</p>
            </div>
        )
    });

    const loads = [];
    for (let i = 0; i < 3; i++) {
        loads.push(<Skeleton key={i}/>);
    }

    const elem = load ? loads : card;

    return (
        <section className="ourBest">
            <div className="limit">
                <h3>Our best</h3>
                <div className="cardsGoods">
                    {elem}
                </div>
            </div>
        </section>
    )
}