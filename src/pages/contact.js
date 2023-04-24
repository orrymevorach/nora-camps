import ContactForm from "@/components/contact-form/contact-form";
import { getAllPaintings, getAllCollections } from "@/lib/contentful";

export default function Contact({ paintings = [] }) {
  return <ContactForm dropDownListItems={paintings} />;
}

export async function getStaticProps() {
  const allPaintings = await getAllPaintings();
  const paintings = allPaintings.map(({ name }) => name);
  const allCollections = await getAllCollections();
  const combineResponsesInArray = [...allCollections, ...allPaintings];

  return {
    props: {
      paintings,
      combineResponsesInArray,
    },
  };
}
