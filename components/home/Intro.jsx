"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/intro.module.css";
import Image from "next/image";

const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".lawyer",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".lawyer",
          start: "bottom bottom",
          end: "bottom center",
        },
      }
    );
    gsap.fromTo(
      ".lawyer_bg",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#about",
          start: "bottom bottom",
          end: "bottom center",
        },
      }
    );
  }, []);
  return (
    <div className={style.content} id="about">
      <div className={style.container}>
        <div className={style.about}>
          <div className={style.heading}>
            <div className="overflow-hidden">
              <h1 className="lawyer" style={{ color: "var(--gold)" }}>
                المحــــــامي والـــموثــــــق
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="lawyer">سليمـــان بن عبد العــزيز</h1>
            </div>
          </div>
          <div className={style.paragraph}>
            <p className="lawyer">
              نسعى إلى توفير الحماية القانونية للشركات المحلية والأجنبية
              والأفراد وتقديم الاستشارات في مختلف المجالات القانونية. نتميز
              بفريق من المحامين المتخصصين الذين يعملون بجد لضمان تقديم أفضل
              الحلول القانونية لعملائنا، سواء كانوا أفرادًا يبحثون عن الدعم
              القانوني الشخصي أو شركات تحتاج إلى استشارات قانونية متخصصة في
              الأعمال التجارية، والتحكيم، وتسوية المنازعات، وغيرها من المجالات.
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
            className="lawyer_bg"
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
