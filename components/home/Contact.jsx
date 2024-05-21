import style from "@/styles/home/contact.module.css";

const Contact = () => {
  return (
    <div className={style.content} id="booking">
      <div className={style.container}>
        <div className={style.card}>
          <h1>أحجــز موعــــــد الآن</h1>
          <span> لطلــب استشــارة قانــونــية</span>
          <form action="">
            <div className={style.row}>
              <input type="text" placeholder="الإسم الكامل" required/>
            </div>
            <div className={style.row}>
              <input type="text" placeholder="رقم الهاتف" required/>
            </div>
            <div className={style.row}>
              <textarea name="message" id="message" placeholder="رسالتك..." required></textarea>
            </div>
            <div className={style.btn}>
              <button type="submit">إرسال</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
