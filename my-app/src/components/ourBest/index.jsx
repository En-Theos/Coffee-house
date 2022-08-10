import './ourBest.scss';

import goods1 from '../../resources/image/png/goods1.png';
import goods2 from '../../resources/image/png/goods2.png';
import goods3 from '../../resources/image/png/goods3.png';

export default function OurBest() {
    return (
        <section className="ourBest">
            <div className="limit">
                <h3>Our best</h3>
                <div className="cardsGoods">
                    <div className="card">
                        <img src={goods1} alt="goods1"/>
                        <p className="name">Solimo Coffee Beans 2 kg</p>
                        <p className="price">10.73$</p>
                    </div>
                    <div className="card">
                        <img src={goods2} alt="goods2"/>
                        <p className="name">Presto Coffee Beans 1 kg</p>
                        <p className="price">15.99$</p>
                    </div>
                    <div className="card">
                        <img src={goods3} alt="goods3"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="price">6.99$</p>
                    </div>
                </div>
            </div>
        </section>
    )
}