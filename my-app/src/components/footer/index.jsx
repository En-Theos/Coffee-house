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
                            <img src={nutsHeaderBlack} alt="nuts_header_black"/>
                            <a href="">Coffee house</a>
                        </li>
                        <li><a href="">Our coffee</a></li>
                        <li><a href="">For your pleasure</a></li>
                    </ul>
                </nav>
                <div className="decor"><img src={nutsBlack} alt="nuts"/></div>
            </div>
        </footer>
    )
}