import { register } from "swiper/element/bundle";
import Mask from '../../img/Mask group.png'
import lupa from '../../img/lupa.png'
import chit from '../../img/chit.png'
import '../../styles/carusel.css'
register();



const MySwiper = () => {
    return (
        <swiper-container class='container' navigation="true" pagination="false">
            <swiper-slide class="container-slide">
                <swiper-slide class='slide1'>
                    <div className='inside-block'>
                        <img className='inside-img' src={Mask} alt='£'/>
                        <div>Высокая и оперативная скорость обработки на заявки</div>
                    </div>
                </swiper-slide>
                <swiper-slide class='slide1'>
                    <div className='inside-block'>
                        <img className='inside-img' src={lupa} alt='£'/>
                        <div>Огромная комплексная база данных, обеспечивающая объективный объективный ответ на запрос</div>
                    </div>

                </swiper-slide>
                <swiper-slide class='slide1'>
                    <div className='inside-block'>
                    <img className='inside-img' src={chit} alt='£'/>
                        <div>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
                    </div>
                </swiper-slide>
            </swiper-slide>
            <swiper-slide class="container-slide">
                <swiper-slide className='slide1'>
                    <div className='inside-block'>
                        <img className='inside-img' src={chit} alt='£'/>
                        <div>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                            законодательству
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className='slide1'>
                    <div className='inside-block'>
                        <img className='inside-img' src={chit} alt='£'/>
                        <div>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                            законодательству
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className='slide1'>
                    <div className='inside-block'>
                        <img className='inside-img' src={chit} alt='£'/>
                        <div>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                            законодательству
                        </div>
                    </div>
                </swiper-slide>
                </swiper-slide>
        </swiper-container>
    );
};
export default MySwiper;