import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Modify the path in __NEXT_DATA__ to remove /[locale] so that Next
    // in the client is working with URLs that match what the browser is
    // telling it (pre-rewrite) instead of what the server was working with
    // (post-rewrite).
    this.props.__NEXT_DATA__.page =
      this.props.__NEXT_DATA__.page.replace("/[locale]", "") || "/";
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
