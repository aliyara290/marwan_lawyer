"use client";
import { useState, useEffect } from "react";
import style from "@/styles/home/faqs.module.css";
import Heading from "@/components/Heading";

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleClick = (index) => {
    setShowAnswer(index === showAnswer ? null : index);
  };

  const faq = [
    {
      question: "ماهي متطلبات تأسيس شركة مهنية مختلطة ؟",
      answer:
        "أن يكون الشريك السعودي حاصل على ترخيـص مزاولة المهنة وأن يكون الشريك الأجنبي شخصية اعتبارية (شركة) تزاول ذات المهنة مدة لا تقل عن ١٠ سنوات ويجب أن لا تقل حصة الشريك السعودي في عقد تأسيس الشركة عن ٢٥٪",
    },
    {
      question: "كيف يمكن تحويل مؤسستي إلى شركة ؟",
      answer:
      "يمكن تحويل المؤسسة إلى شركة إلكترونياً كما يمكن تحويل المؤسسة إلى شركة ذات الشخص الواحد تحت كيان ذات المسؤلية المحدودة أو المساهمة المغلقة.",
    },
    {
      question: "كيف يمكنني تأسيس شركة مساهمة مغلقة ؟",
      answer:
        "يمكن ذلك من خلال استكمال إجراءات التأسيس من خدمات الشركات وتوثيق العقد من كتابة العدل أو موثق معتمد كما يجب استكمال إجراءات النشر بالترخيص والتأسيس واستكمال الجمعية التأسيسية التحولية وحضور أحد الشركاء أو من يمثلهم إلى وزارة التجارة مع سداد التكاليف الحكومية.",
    },
    {
      question: "كيف أتمكن من تعديل عقد تأسيس الشركة ؟",
      answer:
      "يمكن تعديل عقد تأسيس الشركة إلكترونيا من خلال إجراء التعديل وقرارات الشركاء وصياغة قرار الشركاء أو مدير الشركة بحسب صلاحية عقد التأسيس ويمكن من خلال ذلك إجراء التعديلات المطلوبة كزيادة أو تخفيـض رأس المال أو التحويل من كيان إلى كيان آخر أو تعديل الإسم التجاري أو إدخال شركاء أو خروج شركاء.",
    },
    {
      question: "ماهو الحد الأدنى لرأس المال في المؤسسات الفردية ؟",
      answer:
       "أدنى حد لرأس المال في المؤسسات الفردية هو ٥٠٠٠ ريال."
    },
  ];

  return (
    <div className={style.content} id="faq">
      <div className={style.container}>
        <Heading
          topHeading={"الأسئــــلة الشــــائعــة"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          {faq.map((question, index) => (
            <div
              className={`${style.card} `}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className={style.title}>
                <div className={style.question}>
                  <h2>{question.question}</h2>
                </div>
                <div className={style.icon}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="var(--white)"
                    width={40}
                    height={40}
                    className={`${showAnswer === index ? 'active' : ''}`}
                  >
                    <path
                      d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm1.91,26.48c0,2.51,0,5,0,7.54a1.91,1.91,0,0,1-3.81.09c0-1.31,0-2.63,0-3.95V26.92H22.5c-2.52,0-5,0-7.54,0a1.91,1.91,0,1,1,.11-3.81h8v-.54c0-2.53,0-5.06,0-7.58a1.91,1.91,0,1,1,3.81.08v8h.57c2.52,0,5,0,7.54,0a1.9,1.9,0,0,1,1.82,2.61A1.93,1.93,0,0,1,35,26.92h-8Z"
                      transform="translate(-1 -1)"
                    />
                  </svg>
                </div>
              </div>
              {showAnswer === index && (
                <div className={`${style.answer} card_fb5`}>
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
