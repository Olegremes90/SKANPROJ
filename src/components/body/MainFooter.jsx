import React from 'react';
import skan_footer from '../../img/skan_footer.png'
import '../../styles/tarif.css'
const MainFooter = () => {
    return (
        <div>
            <div>
                <div className='container-footer'>
                    <div><img  className='img-skan' src={skan_footer}  alt='#'/></div>
                    <div className='footer-right'>
                        <p>г. Москва, Цветной б-р, 40</p>
                        <p>+7 495 771 21 11</p>
                        <p>info@skan.ru</p>
                        <br/>
                        <p>Copyright. 2022</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainFooter;