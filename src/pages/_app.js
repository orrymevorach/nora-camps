import Layout from "@/components/shared/layout/layout";
import useInitializeHotjar from "@/hooks/useInitializeHotjar";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const { paintingsAndCollections } = pageProps;
  useInitializeHotjar();

  return (
    <Layout paintingsAndCollections={paintingsAndCollections}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </Layout>
  );
}
