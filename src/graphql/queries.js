export const GET_PAGE_ENTRIES = `
  query getEntryIdsFromPageBuilder($page: String!) {
    pageBuilderCollection(where: {page: $page}) {
        items {
            componentsCollection {
              items {
                __typename
                sys {
                  id
                }
              }
            }
          }
      }
  }
  `;

export const GET_HERO_IMAGE = `
  query getHeroImageData($entryId: String!) {
    heroImageCollection (where: {sys: {id: $entryId}}) {
      items {
        heading
        description {
          json 
        }
        backgroundImage {
          url
          description
        }
      }
    }
  }
  `;
