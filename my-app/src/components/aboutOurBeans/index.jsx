import './aboutOurBeans.scss';
import foto1 from '../../resources/image/png/foto.png';
import foto2 from '../../resources/image/png/foto2.png';
import nutsBlack from '../../resources/image/svg/nuts_black.svg';

export default function AboutOurBeans(props) {
    const { fotoMod } = props;

    const foto = fotoMod ? foto1 : foto2;

    return (
        <section className="aboutOurBeans">
            <div className="limit">
                <div className="image">
                    <img src={foto} alt="foto"/>
                </div>
                <div className="content">
                    <h3>About our beans</h3>
                    <div className="decor"><img src={nutsBlack} alt="nuts"/></div>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        <br/> so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br/>
                        is song that held help face.
                    </p>
                </div>
                <div className="line"></div>
            </div>
        </section>
    )
}