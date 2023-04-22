import Layout from "@/components/shared/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { combineResponsesInArray } = pageProps
  console.log(`[PAGE PROPS]`, combineResponsesInArray)
  return (
    <Layout allPaintingsAndCollections={combineResponsesInArray}>
      <Component {...pageProps} />
    </Layout>
  );
}
