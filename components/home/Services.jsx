import style from "@/styles/home/services.module.css";
import Heading from "@/components/Heading";
import Image from "next/image";

const Services = () => {
  const serv = [
    {
      icon: "/",
      title: "الإستشارات القانونية",
      description:
      "يقدم المكتب الإستشارات القانونية وذلك من خلال تقديم المشورة القانونية أو الرأي القانوني وتقديم الحلول القانونية الممكنة حول مسألة أو وقائع معينة فد تكون محل نزاع مستقبلا."
    },
    {
      icon: "/",
      title: "تأسيس الشركات ",
      description:
      "نقوم بتزويدكم بـ المعلومات القانونية التي تساعد في الاختيار الصحيح لـ نوع الشركة ومن ثم نقوم نيابة عنكم بخطوات التأسيس وإعداد ومراجعة وتعديل قرارات الشركـاء."
    },
    {
      icon: "/",
      title: "المتاجر الإلكترونية",
      description:
      "يقوم المكتب بتقديم خدمات صياغة سياسات استخدام المواقع والمنصات الإلكترونية والتطبيقات تتميزصياغتنا وفقًا لمتطلبات كل موقع أو تطبيق أو منصة بالشروط والاحكام الخاصة طبقًا لقوانين المملكة العربية السعودية .",
    },
    {
      icon: "/",
      title: "قانون العمل",
      description:
      "يجيب المحامون على جميع استفساراتكم التي تتعلق بقوانين العمل بالمملكة العربية السعودية كما نقــوم بإعداد وصياغة لوائح تنظيم العمـل ومراجعتها واعتمادها وفق أحدث تعليمـات وزارة الموارد البشرية."
    },
    {
      icon: "/",
      title: "التقاضي",
      description:
      "يقوم المحامون بالتمثيل القانوني بالنيابة عن الشركات والمؤسسات كما يتميز المحامون بالخبرة والمعرفة والتعلم المستمر والإهتمام بأدق التفاصيل في التمثيل القانوني آمام المحاكم التجارية والإدارية والعامة والتحكيم واللجان القضائية.",
    },
    {
      icon: "/",
      title: "تحصيل الديون",
      description:
      "نقــوم بتوفير الوقت والجهـد نيابة عن الشـركـات في تحصيل الأموال بـ طرق التسوية القانونية ومن خلال التنفيذ القضائي بما يحقق الوفرة المالية المستمرة، نتميز بالإلتزام والمسؤولية في التعامل مع العمــلاء بمــا يحقق استمرار التواصل وتحقيق نتيجة السداد.",
    },
  ];
  return (
    <div className={style.content} id="services">
      <div className={style.container}>
        <Heading
          topHeading={"خدماتنا القانونية الشاملة"}
          subHeading={
            "نقوم بتزويدكم بـ المعلومات القانونية التي تساعد في الاختيار الصحيح لـ نوع الشركة ومن ثم نقوم نيابة عنكم بخطوات التأسيس وإعداد ومراجعة وتعديل قرارات الشركـاء."
          }
          centerHeading={true}
          showSubHeading={true}
          showBotHeading={true}
          showBotHeadingn={false}
        />
        <div className={style.cards}>
          {serv.map((card, index) => (
            <div className={style.card} key={index}>
              <div className={style.title}>
                <h1>{card.title}</h1>
                
              </div>
              <div className={style.description}>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.polygon}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 701 39"
            fill="var(--dark)"
          >
            <polygon points="701 39 0 39 0 39 348.71 0 701 39 701 39" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;
