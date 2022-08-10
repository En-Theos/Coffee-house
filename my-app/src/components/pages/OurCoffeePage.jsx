import MinorHeader from "../minorHeader";
import AboutOurBeans from "../aboutOurBeans";
import GoodsList from "../goodsList";

export default function OurCoffeePage() {
    return (
        <>
            <MinorHeader backgroundImageMod={true}/>
            <AboutOurBeans fotoMod={true}/>
            <GoodsList controlIf={true}/>
        </>
    )
}