import './minorHeader.scss';
import nutsHeader from '../../resources/image/svg/nuts_header.svg';

export default function MinorHeader() {
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
                <div className="content">
                    <h2>Our Coffee</h2>
                </div>
            </div>
        </header>
    )
}