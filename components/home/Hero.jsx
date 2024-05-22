"use client";
import { useEffect } from "react";
import gsap from "gsap";
import style from "@/styles/home/hero.module.css";
import Image from "next/image";
const Hero = () => {
  useEffect(() => {
    gsap.fromTo('#vertical', {
      left: 0,
    }, {
      left: '100%',
      opacity: 1,
      delay: 0.4,
      duration: 1,
      onComplete: () => {

        gsap.fromTo(
          ".ov-g5e4",
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.2,
          }
        );
      }
    })
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.center}>
          <div className="overflow-hidden">
            <h1 className="ov-g5e4">شركة سليمان بن عبد العزيز</h1>
          </div>
          <div className="overflow-hidden">
            <h3 className="ov-g5e4">الفريــــــق القانونـــــــــــــي الأكثـــــــــــــر</h3>
          </div>
          <div className="overflow-hidden">
            <h3 className="ov-g5e4">ثقــــــة في المملكــة العـربية السعوديــة</h3>
          </div>
          <div className={style.vertical} id="vertical"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;