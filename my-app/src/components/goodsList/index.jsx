import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Requests from '../../services';

import Skeleton from "../skeleton"

import './goodsList.scss';

export default function GoodsList(props) {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [sfilter, setSFilter] = useState('');
    const [bfilter, setBFilter] = useState('');

    const {controlIf, urlData} = props;

    useEffect(() => {
        Requests.allData(urlData).then((d) => {
            setData(d);
            setLoad(false);
        })
    }, [])

    const card = data.filter(item => item.name.includes(sfilter) || !sfilter)
                    .filter(item => item.country === bfilter || !bfilter)
                    .map(item => {
                        const country = item.country.length > 19 ? item.country.substr(0, 19)+'...' : item.country,
                        name = item.name.length > 26 ? item.name.substr(0, 19)+'...' : item.name;

                        return (
                            <Link to={item.id} className="card" key={item.id}>
                                <img src={item.img} alt="goods"/>
                                <p className="name">{name}</p>
                                <p className="country">{country}</p>
                                <p className="price">{item.price}$</p>
                            </Link>
                        )
                    });

    const loads = [];
    for (let i = 0; i < 3; i++) {
        loads.push(<Skeleton key={i}/>);
    }

    const elem = load ? loads : card;

    function onSFilter(event) {setSFilter(event.target.value)}

    function onBFilter(filterMod) {setBFilter(filterMod)}

    return (
        <section className="goodsList">
            <div className="limit">
                {controlIf ? <Control value={sfilter} onSFilter={onSFilter} onBFilter={onBFilter}/> : null}
                <div className="goodsCard">
                    {elem}
                </div>
            </div>
        </section>
    )
}

function Control(props) {
    const {sfilter, onSFilter, onBFilter} = props;

    return (
        <div className="control">
            <div className="search">
                <label>Lookiing for</label>
                <input type="text" placeholder="start typing here..." value={sfilter} onInput={onSFilter}/>
            </div>
            <div className="filter">
                <label>Or filter</label>
                <button onClick={() => onBFilter('Georgia')}>Georgia</button>
                <button onClick={() => onBFilter('Gibraltar')}>Gibraltar</button>
                <button onClick={() => onBFilter('Macao')}>Macao</button>
                <button onClick={() => onBFilter('')}>All</button>
            </div>
        </div>
    )
}