import style from "@/styles/home/hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.center}>
          <div className="overflow-hidden">
            <h1>شركة سليمان بن عبد العزيز</h1>
          </div>
          <div className="overflow-hidden">
            <h3>الفريــــــق القانونـــــــــــــي الأكثـــــــــــــر</h3>
          </div>
          <div className="overflow-hidden">
            <h3>ثقــــــة في المملكــة العـربية السعوديــة</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;