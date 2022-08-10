import './meinHeader.scss';
import nutsHeader from '../../resources/image/svg/nuts_header.svg';
import nuts from '../../resources/image/svg/nuts.svg';

export default function MeinHeader() {
    return (
        <header>
            <div className="limit">
                <nav>
                    <ul>
                        <li>
                            <img src={nutsHeader} alt="nuts_header"/>
                            <a href="./index.html">Coffee house</a>
                        </li>
                        <li><a href="./ourCoffeePage.html">Our coffee</a></li>
                        <li><a href="./forYourPleasure.html">For your pleasure</a></li>
                    </ul>
                </nav>
                <div className="contentHeader">
                    <h1>Everything You Love About Coffee</h1>
                    <div className="decor"><img src={nuts} alt="nuts"/></div>
                    <h2 className="slogan">We makes every day full of energy and taste</h2>
                    <h2 className="question">Want to try our beans?</h2>
                    <button>More</button>
                </div>
            </div>
        </header>
    )
}