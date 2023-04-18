import { gql } from '@apollo/client';
import {
  PAINTING_FRAGMENT,
  IMAGE_FRAGMENT,
  EVENT_FRAGMENT,
  SPECIAL_PROJECT_FRAGMENT,
  COLLECTION_FRAGMENT,
  ABOUT_THE_AUTHOR_FRAGMENT,
} from './fragments';

export const GET_PAGE_ENTRIES = gql`
  query getEntryIdsFromPageBuilder($page: String!) {
    pageBuilderCollection(where: { page: $page }) {
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

export const GET_HERO_IMAGE = gql`
  query getHeroImageData($entryId: String!) {
    heroImageCollection(where: { sys: { id: $entryId } }) {
      items {
        heading
        description {
          json
        }
        backgroundImage {
          ...ImageFields
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;

export const GET_COLLECTION_BY_NAME = gql`
  query getCollectionByName($name: String!) {
    collectionCollection(where: { name: $name }) {
      items {
        ...CollectionFields
      }
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_COLLECTION_BY_ENTRY_ID = gql`
  query getCollectionByEntryId($entryId: String!) {
    collection(id: $entryId) {
      ...CollectionFields
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_ALL_COLLECTIONS = gql`
  query GetAllCollections {
    collectionCollection {
      items {
        ...CollectionFields
      }
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_GALLERY = gql`
  query getGallery($entryId: String!) {
    gallery(id: $entryId) {
      itemsCollection {
        items {
          ... on Painting {
            ...PaintingFields
            imageCollection(limit: 1) {
              items {
                ...ImageFields
              }
            }
            collection {
              name
            }
          }
          ... on Event {
            ...EventFields
          }
          ... on SpecialProject {
            ...SpecialProjectFields
          }
          ... on Collection {
            ...CollectionFields
          }
          ... on AboutTheAuthor {
            ...AboutTheAuthorFields
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${EVENT_FRAGMENT}
  ${PAINTING_FRAGMENT}
  ${SPECIAL_PROJECT_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  ${ABOUT_THE_AUTHOR_FRAGMENT}
`;

export const GET_PAINTING_BY_NAME = gql`
  query getPaintingByName($name: String) {
    paintingCollection(where: { name: $name }) {
      items {
        ...PaintingFields
        imageCollection {
          items {
            ...ImageFields
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${PAINTING_FRAGMENT}
`;

export const GET_PAINTING_BY_ENTRY_ID = gql`
  query getPaintingByEntryId($entryId: String!) {
    painting(id: $entryId) {
      ...PaintingFields
      imageCollection {
        items {
          ...ImageFields
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${PAINTING_FRAGMENT}
`;

export const GET_ALL_PAINTINGS = gql`
  query getPaintings {
    paintingCollection {
      items {
        ...PaintingFields
        imageCollection(limit: 1) {
          items {
            ...ImageFields
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${PAINTING_FRAGMENT}
`;

export const GET_EVENT_BY_NAME = gql`
  query getEventByName($name: String) {
    eventCollection(where: { name: $name }) {
      items {
        ...EventFields
      }
    }
  }
  ${EVENT_FRAGMENT}
`;

export const GET_ALL_EVENTS = gql`
  query getAllEvents {
    eventCollection {
      items {
        ...EventFields
      }
    }
  }
  ${EVENT_FRAGMENT}
`;

export const GET_SPECIAL_PROJECTS_TOP_SECTION = gql`
  query getSpecialProjectsTopSection($entryId: String!) {
    specialProjectsTopSection(id: $entryId) {
      topImagesCollection {
        items {
          ...ImageFields
        }
      }
      heading
      description {
        json
      }
      bottomLeftImagesCollection {
        items {
          ...ImageFields
        }
      }
      bottomRightImagesCollection {
        items {
          ...ImageFields
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;

export const GET_RICH_TEXT_BY_ENTRY_ID = gql`
  query GetRichText($entryId: String!) {
    contentTypeRichText(id: $entryId) {
      richText {
        json
      }
    }
  }
`;

export const GET_ABOUT_PAGE_TOP_SECTION = gql`
  query GetAboutPageTopSection($entryId: String!) {
    aboutPageTopSection(id: $entryId) {
      name
      description {
        json
      }
      imageCollection {
        items {
          ...ImageFields
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
