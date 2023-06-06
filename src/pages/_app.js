import Layout from "@/components/shared/layout/layout";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const { paintingsAndCollections } = pageProps;

  useEffect(() => {
    hotjar.initialize(
      process.env.NEXT_PUBLIC_HOTJAR_ID,
      process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION
    );
  }, []);

  return (
    <Layout paintingsAndCollections={paintingsAndCollections}>
      <Component {...pageProps} />
    </Layout>
  );
}
