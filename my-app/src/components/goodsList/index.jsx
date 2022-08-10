import './goodsList.scss';
import goods3 from '../../resources/image/png/goods3.png';

export default function GoodsList(props) {
    const {controlIf} = props;

    return (
        <section className="goodsList">
            <div className="limit">
                {controlIf ? <Control/> : null}
                <div className="goodsCard">
                    <div className="card">
                        <img src={goods3} alt="goods"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="country">Brazil</p>
                        <p className="price">6.99$</p>
                    </div>
                    <div className="card">
                        <img src={goods3} alt="goods"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="country">Kenya</p>
                        <p className="price">6.99$</p>
                    </div>
                    <div className="card">
                        <img src={goods3} alt="goods"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="country">Columbia</p>
                        <p className="price">6.99$</p>
                    </div>
                    <div className="card">
                        <img src={goods3} alt="goods"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="country">Brazil</p>
                        <p className="price">6.99$</p>
                    </div>
                    <div className="card">
                        <img src={goods3} alt="goods"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="country">Brazil</p>
                        <p className="price">6.99$</p>
                    </div>
                    <div className="card">
                        <img src={goods3} alt="goods"/>
                        <p className="name">AROMISTICO Coffee 1 kg</p>
                        <p className="country">Brazil</p>
                        <p className="price">6.99$</p>
                    </div>
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