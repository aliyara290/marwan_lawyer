import style from '@/styles/home/header.module.css'
import Image from 'next/image';

const Header = () => {
    return ( 
        <div className={style.content} >
            <div className={style.container}>
                <div className={style.logo}>
                    <Image 
                    src={'/images/logo.svg'}
                    alt='pic'
                    width={170}
                    height={170}
                    />
                </div>
                <div className={style.links}>
                    <ul>
                        <li><a href="#about">من نحن؟</a></li>
                        <li><a href="#services">خدماتنا</a></li>
                        <li><a href="#clients">عملاؤنا</a></li>
                        <li><a href="#booking">حجز موعد</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Header;