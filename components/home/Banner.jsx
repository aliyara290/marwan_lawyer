"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import style from "@/styles/home/banner.module.css";
import Heading from "@/components/Heading";

const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".banner_tx",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.4,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".banner_tx",
          start: "center bottom",
          end: "bottom center",
          toggleActions: 'restart none none none'
        },
      }
    );
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.bold}>
          <div className="overflow-hidden">
            <h1 className="banner_tx">
              الفريــــــــــــق القانونــــــــــــــــي
              الأكثـــــــــــــــــر
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="banner_tx">ثقـة في المملكــــة العربية السعودية</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
