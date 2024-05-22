"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/achievemnt.module.css";
import Heading from "@/components/Heading";

const Achievemnt = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".card__7gv9",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card__7gv9",
          start: "center bottom",
          end: "bottom center",
        },
      }
    );
  }, []);
  return (
    <div className={style.content} id="achievemnt">
      <div className={style.container}>
        <Heading
          topHeading={"أبرز إنجازاتنا"}
          botHeading={"لمحة عن بعض الأرقام والإحصائيات"}
          subHeading={
            "نفخر في مكتب النشمي بتقديم أعلى مستوى من جودة الخدمات القانونية في مختلف المجالات. حيث تخطينا حاجز الألف عملية توثيق وتعاملنا مع العديد من القاضايا المالية التي تجاوزت إجمالي قيمتها المليار ريال سعودي!"
          }
          centerHeading={true}
          showSubHeading={true}
          showBotHeading={true}
          showBotHeadingn={false}
        />
        <div className={style.cards}>
          <div className={style.row}>
            <div className={`${style.card} card__7gv9`}>
              <h2>تجاوزت خبرتنا 12 سنة</h2>
              <h2>في مختلف المجالات القانونية</h2>
            </div>
            <div className={`${style.card} card__7gv9`}>
              <h2>أكثر من 3300 عملية توثيق</h2>
              <h2>للعقود والوكالات والإفراغات العقارية</h2>
            </div>
          </div>
          <div className={style.row}>
            <div className={`${style.card} card__7gv9`}>
              <h2>أكثر من مليار ريال</h2>
              <h2>مجموع المبالغ التي تعامل معها المكتب</h2>
            </div>
            <div className={`${style.card} card__7gv9`}>
              <h2>أكثر من 500 قضية</h2>
              <h2>متنوعة تم إنجازها</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievemnt;
