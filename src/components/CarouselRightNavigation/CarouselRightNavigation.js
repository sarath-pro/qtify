import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from "../../assets/rightNavigation.svg"
import "./CarouselRightNavigation.css"

export default function CarouselRightNavigation() {
    console.log('right navigation called')

    const swiper = useSwiper()
    const [ isEnd, setIsEnd ] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isBeginning)
        })
    }, []);

    return (
        <div className='right-navigator'>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}