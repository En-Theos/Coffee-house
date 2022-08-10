import { Link } from 'react-router-dom';

import './minorHeader.scss';
import nutsHeader from '../../resources/image/svg/nuts_header.svg';
import fonHeader2 from '../../resources/image/png/fon_header2.png';
import fonHeader3 from '../../resources/image/png/fon_header3.png';


export default function MinorHeader(props) {
    const { backgroundImageMod } = props;

    const img = backgroundImageMod ? fonHeader2 : fonHeader3;
    
    return (
        <header className='minorHeader' style={{backgroundImage: `url(${img})`}}>
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
                <div className="content">
                    <h2>Our Coffee</h2>
                </div>
            </div>
        </header>
    )
}