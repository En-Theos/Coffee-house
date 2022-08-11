import MinorHeader from "../minorHeader";
import AboutOurBeans from "../aboutOurBeans";
import GoodsList from "../goodsList";

export default function OurCoffeePage() {
    return (
        <>
            <MinorHeader backgroundImageMod={true}/>
            <AboutOurBeans fotoMod={true}/>
            <GoodsList controlIf={true} urlData={"https://62f4ebd9ac59075124c71074.mockapi.io/goods"}/>
        </>
    )
}