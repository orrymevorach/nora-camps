import Layout from "@/components/shared/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { paintingsAndCollections } = pageProps;
  return (
    <Layout paintingsAndCollections={paintingsAndCollections}>
      <Component {...pageProps} />
    </Layout>
  );
}
