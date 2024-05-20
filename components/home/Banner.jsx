import style from "@/styles/home/banner.module.css";
import Heading from "@/components/Heading";

const Banner = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
       <div className={style.bold}>
        <h1>الفريــــــــــــق القانونــــــــــــــــي الأكثـــــــــــــــــر</h1>
        <h1>ثقـة في المملكــــة العربية السعودية</h1>
       </div>
      </div>
    </div>
  );
};

export default Banner;
