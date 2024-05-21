"use client";
import { useEffect } from "react";
import Link from "next/link";
import style from "@/styles/home/header.module.css";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    const pagesLinks = document.querySelectorAll(".link");
    pagesLinks.forEach((link) => {
      link.setAttribute("data-text", link.textContent);
    });
  }, []);

  const handleClick = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.toggle(`${style.active}`);
    hamburger.classList.toggle(`${style.active}`);
  };
  const handleCloseMenu = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.remove(`${style.active}`);
    hamburger.classList.remove(`${style.active}`);
  };
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image src={"/images/logo.svg"} alt="pic" width={170} height={170} />
        </div>
        <div className={style.navigation} id="navigation">
          <ul className={style.pages}>
            <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
              <a href="#about">
                <div className="link">من نحن</div>
              </a>
            </li>
            <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
              <a href="#achievemnt">
                <div className="link">إنجازاتنا</div>
              </a>
            </li>
            <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
              <a href="#services">
                <div className="link">خدماتنا</div>
              </a>
            </li>
            <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
              <a href="#team">
                <div className="link">فريقنا</div>
              </a>
            </li>
            <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
              <a href="#booking">
                <div className="link">حجز موعد</div>
              </a>
            </li>
            <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
              <a href="#faq">
                <div className="link">الأسئلة الشائعة</div>
              </a>
            </li>
          </ul>
          <div className={style.social}>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/aromes_de_paris"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  إنستغرام
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/p/Ar%C3%B4mes-de-Paris-100067833978879/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  فيسبوك
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={style.hamburger}
          id="hamburger"
          onClick={() => handleClick()}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 10"
            width={30}
            height={30}
            fill="var(--white)"
          >
            <rect width="15" height="2" className={style.bar} />
            <rect y="4" width="15" height="2" className={style.bar_two} />
            <rect y="8" width="15" height="2" className={style.bar_three} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
