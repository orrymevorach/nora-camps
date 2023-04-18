import Head from 'next/head';
export default function SEO({ title = '' }) {
  const titleAttribute = `Nora Camps${title ? ` | ${title}` : ''}`;
  return (
    <Head>
      <title>{titleAttribute}</title>
      <link rel="icon" href="images/NC.png" sizes="32" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="The road to my vocation is clear – connecting people with ideas and each other through story. Paintings and collections of photographs exemplify that reality. Welcome to my work."
      />
      <meta
        name="keywords"
        content="Nora Camps, artist, Toronto, contemporary, abstract"
      />
    </Head>
  );
}
