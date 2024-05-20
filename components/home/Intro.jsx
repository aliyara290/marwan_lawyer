import style from "@/styles/home/intro.module.css";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={style.content} id="about">
      <div className={style.container}>
        <div className={style.about}>
          <div className={style.heading}>
            <h1>المحــــــامي والـــموثــــــق</h1>
            <h1>سليمـــان بن عبد العــزيز</h1>
          </div>
          <div className={style.paragraph}>
            <p>
              يقوم مكتب المحامي والموثق موسى النشمي للمحاماة والاستشارات الشرعية
              والقانونية منذ تأسيسه وحتى الآن بدور فعال في تقديم النصح والمشورة
              في كافة المجالات القانونية والشرعية المرتبطة بالشركات والمؤسسات
              وحتى الأفراد بتوفير الحماية القانونية لهم من خلال نخبة من المحامين
              والمستشارين من ذوي الكفاءة والخبرة من الناحية العلمية والعملية.
            </p>
            <br />
            <p>
              كما نسعى إلى توفير الحماية القانونية للشركات المحلية والأجنبية
              والأفراد وتقديم الاستشارات في مختلف المجالات القانونية.
            </p>
          </div>
          <div className={style.dots}>
            <Image
              src={"/images/small-dots.svg"}
              alt="pic"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={style.pic}>
          <Image
            src={"/images/team/mo7ami.png"}
            alt="pic"
            width={900}
            height={900}
          />
        </div>
      </div>
      <div className={style.polygon}>

      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 93 20"
        fill="var(--grey)"
      >
        <polygon class="cls-1" points="93 20 83 9 0 0 93 0 93 20" />
      </svg>
      </div>
    </div>
  );
};

export default Intro;
