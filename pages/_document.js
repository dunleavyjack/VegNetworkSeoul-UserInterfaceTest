import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel="preload"
            href="/fonts/Gilmer/Gilmer-Regular.otf"
            as="font"
            crossOrigin=""
          />{" "} */}
          <link rel="stylesheet" href="/fonts/Gilmer/Gilmer-Regular.otf" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
