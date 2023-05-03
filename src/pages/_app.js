import Layout from "@/components/shared/layout/layout";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const { paintingsAndCollections } = pageProps;
  return (
    <Layout paintingsAndCollections={paintingsAndCollections}>
      <Component {...pageProps} />
    </Layout>
  );
}
