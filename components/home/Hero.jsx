import style from "@/styles/home/hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.center}>
          <div className="overflow-hidden">
            <h1>سليمان بن عبد العزيز</h1>
          </div>
          <div className="overflow-hidden">
            <h1>للمحـامات والإستشــارات</h1>
          </div>
          <div className="overflow-hidden">
            <h1>الشرعيــة والقـانونية</h1>
          </div>
          <div className={style.bg}>
            <Image
              src={"/images/dots.svg"}
              alt="svg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;