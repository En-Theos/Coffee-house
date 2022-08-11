import MinorHeader from "../minorHeader";
import AboutOurBeans from "../aboutOurBeans";
import GoodsList from "../goodsList";

export default function ForYourPleasurePage() {
    return (
        <>
            <MinorHeader backgroundImageMod={false}/>
            <AboutOurBeans fotoMod={false}/>
            <GoodsList controlIf={false} urlData={"https://62f4ebd9ac59075124c71074.mockapi.io/goods2"}/>
        </>
    )
}