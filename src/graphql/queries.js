import { gql } from '@apollo/client';
import { PAINTING_FRAGMENT, IMAGE_FRAGMENT } from './fragments';

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

export const GET_COLLECTION_BY_ENTRY_ID = gql`
  query getCollectionByEntryId($entryId: String!) {
    collection(id: $entryId) {
      name
      paintingsCollection(limit: 40) {
        items {
          ...PaintingFields
        }
      }
    }
  }
  ${PAINTING_FRAGMENT}
`;

export const GET_COLLECTION_BY_NAME = gql`
  query getCollectionByName($name: String!) {
    collectionCollection(where: { name: $name }) {
      items {
        name
        paintingsCollection(limit: 40) {
          items {
            ...PaintingFields
          }
        }
      }
    }
  }
  ${PAINTING_FRAGMENT}
`;

export const GET_GALLERY = gql`
  query getGallery($entryId: String!) {
    gallery(id: $entryId) {
      itemsCollection {
        items {
          ...PaintingFields
        }
      }
    }
  }
  ${PAINTING_FRAGMENT}
`;

export const GET_PAINTING_BY_NAME = gql`
  query getPaintingByName($name: String) {
    paintingCollection(where: { name: $name }) {
      items {
        ...PaintingFields
      }
    }
  }
  ${PAINTING_FRAGMENT}
`;

export const GET_ALL_PAINTINGS = gql`
  query getPaintings {
    paintingCollection {
      items {
        ...PaintingFields
      }
    }
  }
  ${PAINTING_FRAGMENT}
`;
