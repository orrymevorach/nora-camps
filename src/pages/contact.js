import ContactForm from "@/components/contact-form/contact-form";
import { getAllPaintings, getCollectionsAndPaintings } from "@/lib/contentful";

export default function Contact({ paintings = [] }) {
  return <ContactForm dropDownListItems={paintings} />;
}

export async function getStaticProps() {
  const allPaintings = await getAllPaintings();
  const paintings = allPaintings.map(({ name }) => name);
  const { paintingsAndCollections } = await getCollectionsAndPaintings();

  return {
    props: {
      paintings,
      paintingsAndCollections,
    },
  };
}
