import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from "../../assets/leftNavigation.svg"
import "./CarouselLeftNavigation.css"

export default function CarouselLeftNavigation() {
    console.log('left navigation called')

    const swiper = useSwiper()
    const [ isBeginning, setIsBeginning ] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function (){
            console.log('swiper.isbeginning::', swiper.isBeginning)
            setIsBeginning(swiper.isBeginning)
        })
    }, []);

    return (
        <div className='left-navigator'>
            {isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
        </div>
    )
}