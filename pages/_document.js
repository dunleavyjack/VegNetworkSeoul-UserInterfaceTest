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
          <div id="fb-root"></div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=1351780385183146&autoLogAppEvents=1"
            nonce="vkQBz0Zh"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
