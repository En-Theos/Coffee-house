import { Link } from 'react-router-dom';

import './mainHeader.scss';
import nutsHeader from '../../resources/image/svg/nuts_header.svg';
import nuts from '../../resources/image/svg/nuts.svg';

export default function MainHeader() {
    return (
        <header className='mainHeader'>
            <div className="limit">
                <nav>
                    <ul>
                        <li>
                            <img src={nutsHeader} alt="nuts_header"/>
                            <Link className='link' to="/">Coffee house</Link>
                        </li>
                        <li><Link className='link' to="/ourCoffeePage">Our coffee</Link></li>
                        <li><Link className='link' to="/forYourPleasurePage">For your pleasure</Link></li>
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