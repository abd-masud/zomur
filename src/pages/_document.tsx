import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="img/favicon.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/font-awesome-all.min.css" />
        <link rel="stylesheet" href="/css/charts.min.css" />
        <link rel="stylesheet" href="/css/datatables.min.css" />
        <link rel="stylesheet" href="/css/fancy-box.min.css" />
        <link rel="stylesheet" href="/css/nice-select.min.css" />
        <link rel="stylesheet" href="/css/pikaday.min.css" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery-migrate.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/charts.js"></script>
        <script src="/js/final-countdown.min.js"></script>
        <script src="/js/fancy-box.min.js"></script>
        <script src="/js/fullcalendar.min.js"></script>
        <script src="/js/datatables.min.js"></script>
        <script src="/js/circle-progress.min.js"></script>
        <script src="/js/nice-select.min.js"></script>
        <script src="/js/pikaday.min.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </Html>
  );
}
