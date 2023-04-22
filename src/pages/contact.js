import ContactForm from "@/components/contact-form/contact-form";
import { getAllPaintings, getAllCollections } from "@/lib/contentful";

export default function Contact({ paintings = [] }) {
  return <ContactForm dropDownListItems={paintings} />;
}

export async function getStaticProps() {
  const paintingsResponse = await getAllPaintings();
  const paintings = paintingsResponse.map(({ name }) => name);
  const collectionsResponse = await getAllCollections();
  const combineResponsesInArray = [...collectionsResponse, ...paintingsResponse];
  
  return {
    props: {
      paintings,
      combineResponsesInArray,
    },
  };
}
