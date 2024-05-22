import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
       <Head>
        <meta charSet="UTF-8" />
        <title>شركة سليمان بن عبد العزيز للمحاماة</title>
        <meta name="description" content="شركة سليمان بن عبد العزيز للمحاماة تقدم خدمات قانونية متكاملة تشمل الاستشارات القانونية والتمثيل القانوني في مختلف المجالات القانونية." />
        <link rel="preload" href="LyonArabicDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin></link>
        <link type="image/x-icon" rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#181818"></meta>
        <meta name="keywords" content="محاماة, استشارات قانونية, خدمات قانونية, تمثيل قانوني, محامي" />
        <meta name="author" content="شركة سليمان بن عبد العزيز للمحاماة" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="language" content="ar" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:title" content="شركة سليمان بن عبد العزيز للمحاماة" />
        <meta property="og:description" content="شركة سليمان بن عبد العزيز للمحاماة تقدم خدمات قانونية متكاملة تشمل الاستشارات القانونية والتمثيل القانوني في مختلف المجالات القانونية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com" />
        <meta property="og:image" content="https://www.example.com/image.jpg" />  
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة سليمان بن عبد العزيز للمحاماة" />
        <meta name="twitter:description" content="شركة سليمان بن عبد العزيز للمحاماة تقدم خدمات قانونية متكاملة تشمل الاستشارات القانونية والتمثيل القانوني في مختلف المجالات القانونية." />
        <meta name="twitter:image" content="https://www.example.com/image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}