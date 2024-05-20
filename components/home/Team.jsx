"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/team.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";

const Team = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".team_det__03r",
      {
        y: "100%",
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        trigger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".team_det__03r",
          start: "center bottom",
          end: "bottom center",
          ease: "power4.inOut",
        },
      }
    );
  }, []);
  return (
    <div className={style.content} id="team">
      <div className={style.container}>
        <Heading
          topHeading={"فريــــق العمـــل"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.pic}>
              <Image
                src={"/images/team/1111.jpg"}
                alt="pic"
                width={600}
                height={600}
              />
            </div>
            <div className={style.details}>
              <h3 className="team_det__03r">طلال بن تركي</h3>
              <span className="team_det__03r"> أخصائي عقود</span>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.pic}>
              <Image
                src={"/images/team/2222.jpg"}
                alt="pic"
                width={600}
                height={600}
              />
            </div>
            <div className={style.details}>
              <h3 className="team_det__03r">خالد بن فيصل</h3>
              <span className="team_det__03r">محام - ماجستير قانون</span>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.pic}>
              <Image
                src={"/images/team/3333.jpg"}
                alt="pic"
                width={600}
                height={600}
              />
            </div>
            <div className={style.details}>
              <h3 className="team_det__03r">عبد العزيز بن عبد الرحمن</h3>
              <span className="team_det__03r">باحث قانوني - ماجستير قانون</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
