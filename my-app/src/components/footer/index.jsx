import { Link } from 'react-router-dom';

import './footer.scss';
import nutsHeaderBlack from '../../resources/image/svg/nuts_header_black.svg';
import nutsBlack from '../../resources/image/svg/nuts_black.svg';

export default function Footer() {
    return (
        <footer>
            <div className="limit">
                <nav>
                <ul>
                    <li>
                        <img src={nutsHeaderBlack} alt="nuts_header"/>
                        <Link className='link' to="/">Coffee house</Link>
                    </li>
                    <li><Link className='link' to="/ourCoffeePage">Our coffee</Link></li>
                    <li><Link className='link' to="/forYourPleasurePage">For your pleasure</Link></li>
                </ul>
                </nav>
                <div className="decor"><img src={nutsBlack} alt="nuts"/></div>
            </div>
        </footer>
    )
}