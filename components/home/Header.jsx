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
                        <li><a href="#about">من نــحن؟</a></li>
                        <li><a href="#about">إنجـازاتنـــا</a></li>
                        <li><a href="#services">خدماتنـــا</a></li>
                        <li><a href="#clients">عملاؤنــا</a></li>
                        <li><a href="#clients">فريـــقنـا</a></li>
                        <li><a href="#booking">حجــز موعـد</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Header;