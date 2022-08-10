import MinorHeader from "../minorHeader";
import AboutOurBeans from "../aboutOurBeans";
import GoodsList from "../goodsList";

export default function ForYourPleasurePage() {
    return (
        <>
            <MinorHeader backgroundImageMod={false}/>
            <AboutOurBeans fotoMod={false}/>
            <GoodsList controlIf={false}/>
        </>
    )
}