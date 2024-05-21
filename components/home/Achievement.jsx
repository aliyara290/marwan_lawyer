import style from "@/styles/home/achievemnt.module.css";
import Heading from "@/components/Heading";

const Achievemnt = () => {
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
            <div className={style.card}>
                <h2>تجاوزت خبرتنا 12 سنة</h2>
                <h2>في مختلف المجالات القانونية</h2>
            </div>
            <div className={style.card}>
                <h2>أكثر من 3300 عملية توثيق</h2>
                <h2>للعقود والوكالات والإفراغات العقارية</h2>
            </div>
            <div className={style.card}>
                <h2>أكثر من مليار ريال</h2>
                <h2>مجموع المبالغ التي تعامل معها المكتب</h2>
            </div>
            <div className={style.card}>
                <h2>أكثر من 500 قضية</h2>
                <h2>متنوعة تم إنجازها</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Achievemnt;
