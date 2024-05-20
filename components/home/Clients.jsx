import style from "@/styles/home/client.module.css";
import Heading from "@/components/Heading";
import Image from "next/image";

const Clients = () => {
  return (
    <div className={style.content} id="clients">
      <div className={style.container}>
        <Heading
          topHeading={'أبرز عملائنا'}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={true}
          showBotHeadingn={false}
        />
        <div className={style.cards}>
          <div className={style.card}>
            <Image
              src={"/images/clients/client3.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client4.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client6.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client7.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client8.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client40.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client4.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client6.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client3.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
          <div className={style.card}>
            <Image
              src={"/images/clients/client4.png"}
              alt="pic"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
