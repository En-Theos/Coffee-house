import './goods.scss';
import goods4 from '../../resources/image/png/goods4.jpg';
import nutsBlack from '../../resources/image/svg/nuts_black.svg'

export default function Goods() {
    return (
        <section>
            <div className="limit">
                <div className="image">
                    <img src={goods4} alt="goods4"/>
                </div>
                <div className="content">
                    <h3>About it</h3>
                    <div className="decor"><img src={nutsBlack} alt="nuts"/></div>
                    <p className="country"><span>Country:</span> Brasil</p>
                    <p className="description"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <pre className="price">Price:   <span>16.99$</span></pre>
                </div>
            </div>
        </section>
    )
}