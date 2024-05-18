import style from '@/styles/home/header.module.css'
import Image from 'next/image';

const Header = () => {
    return ( 
        <div className={style.content}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image 
                    src={'/images/logo.svg'}
                    alt='pic'
                    width={200}
                    height={200}
                    />
                </div>
                <div className={style.links}>
                    <ul>
                        <li><a href="#">من نحن؟</a></li>
                        <li><a href="#">التوثيق</a></li>
                        <li><a href="#">خدماتنا</a></li>
                        <li><a href="#">استشارات</a></li>
                        <li><a href="#">عملاؤنا</a></li>
                        <li><a href="#">حجز المواعيد</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Header;