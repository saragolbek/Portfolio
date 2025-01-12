import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            {/* Font Awesome Kit */}
            <script
                src="https://kit.fontawesome.com/e067495424.js"
                crossOrigin="anonymous"></script>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        {/* Bootstrap JavaScript */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                crossOrigin="anonymous"></script>
      </body>
    </Html>
  );
}
