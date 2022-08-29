import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef, useMemo } from 'react';

import Requests from '../../services';
import Skeleton from '../skeleton';

import './goods.scss';
import nutsBlack from '../../resources/image/svg/nuts_black.svg'

export default function Goods() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        Requests.allData(`https://62f8d7563eab3503d1dc1d9a.mockapi.io/coffeehouse?page=${id}&limit=1`).then((d) => {
            setData(...d);
            setLoad(false);
        });
    }, []);

    const elem = load ? <Skeleton style={{ width: "100%" }} /> : <Elem data={data} />

    return (
        <section className='goods'>
            {elem}
        </section>
    )
}

function Elem({ data }) {
    const [mod, setMod] = useState(0);
    let refElemForResize = useRef(null);

    useEffect(() => {
        let observer = new ResizeObserver(mutationRecords => {
            if (mutationRecords[0].target.clientWidth <= 835) {
                if (mod === 0) {
                    setMod(1);
                }
            } else if (mutationRecords[0].target.clientWidth >= 835) {
                if (mod === 1) {
                    setMod(0);
                }
            }
        });
        observer.observe(refElemForResize.current);

    }, []);

    const elem =  mod ? <SliderElem data={data}/> : <BasicElem data={data}/>;

    return (
        <div ref={refElemForResize} className="limit">
            {elem}
        </div>
    )
}

function BasicElem(prors) {
    const { data: {img, country, description, price} } = prors;

    return (
        <>
            <div className="image">
                <img src={img} alt="goods4" />
            </div>
            <div className="content">
                <h3>About it</h3>
                <div className="decor"><img src={nutsBlack} alt="nuts" /></div>
                <p className="country"><span>Country:</span> {country}</p>
                <p className="description"><span>Description:</span> {description}</p>
                <pre className="price">Price:   <span>{price}$</span></pre>
            </div>
        </>
    )
}

function SliderElem(prors) {
    const { data: {img, country, description, price} } = prors;
    let refSliderTape = useRef(null);
    let { current: refMousedownX } = useRef(0);
    let { current: carrentSlide } = useRef(0);
    const maxBias = useMemo(() => 390, [])

    useEffect(() => {
        refSliderTape.current.addEventListener('touchstart', eventMousedown);
        refSliderTape.current.addEventListener('touchend', eventMouseup);

        function eventMousemove(event) {
            refSliderTape.current.style.transform = `translateX(-${refMousedownX - event.changedTouches[0].clientX + 390 * carrentSlide}px)`;
        }

        function eventMousedown(event) {
            if (event.changedTouches[0].target.classList.contains("blockText")) {
                refSliderTape.current.style.transition = '0s';
                refMousedownX = event.changedTouches[0].clientX;
                refSliderTape.current.addEventListener('touchmove', eventMousemove);
            }
        }

        function eventMouseup(event) {
            if (event.changedTouches[0].target.classList.contains("blockText")) {
                const bias = refMousedownX - event.changedTouches[0].clientX
                refSliderTape.current.removeEventListener('touchmove', eventMousemove);

                if (bias < 0 && Math.abs(bias) > 390 / 4 && (bias + 390 * carrentSlide) > 0) {
                    refSliderTape.current.style.transition = '.4s';
                    carrentSlide--;
                    refSliderTape.current.style.transform = `translateX(-${390 * carrentSlide}px)`;
                } else if (bias > 0 && Math.abs(bias) > 390 / 4 && (bias + 390 * carrentSlide) < maxBias) {
                    refSliderTape.current.style.transition = '.4s';
                    carrentSlide++;
                    refSliderTape.current.style.transform = `translateX(-${390 * carrentSlide}px)`;
                } else {
                    refSliderTape.current.style.transition = '.4s';
                    refSliderTape.current.style.transform = `translateX(-${390 * carrentSlide}px)`;
                }
            }
        }

    }, []);

    return (
        <div className='sliderWindow'>
            <div ref={refSliderTape} className='sliderTape'>
                <div className="slide">
                    <div className="content">
                        <h3>About it</h3>
                        <div className="decor"><img src={nutsBlack} alt="nuts" /></div>
                        <p className="country"><span>Country:</span> {country}</p>
                        <p className="description"><span>Description:</span> {description}</p>
                        <pre className="price">Price:   <span>{price}$</span></pre>
                    </div>
                    <div className='touchZone' style={{ textAlign: "right" }}> <div className='blockText'></div> Image {'->'}</div>
                </div>
                <div className="slide">
                    <div className="image">
                        <img src={img} alt="goods4" />
                    </div>
                    <div className='touchZone'> <div className='blockText'></div> {'<-'} Description</div>
                </div>
            </div>
        </div>
    )
}