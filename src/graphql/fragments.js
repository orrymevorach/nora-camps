import { gql } from "@apollo/client";

export const IMAGE_FRAGMENT = gql`
  fragment ImageFields on Asset {
    url
    width
    height
    description
  }
`;

export const LINK_FRAGMENT = gql`
  fragment LinkFields on Link {
    label
    url
  }
`;

//  Exlusively for the painting in a gallery or collection, the limit is set to 1 to simplify the query
// For the Painting Display Page, the limit will have to be higher to render more images in the carousel
export const PAINTING_FRAGMENT = gql`
  fragment PaintingFields on Painting {
    collection {
      name
    }
    name
    details
    price
    dimensions
    description {
      json
    }
    additionalDescription {
      json
    }
    __typename
  }
`;

export const EVENT_FRAGMENT = gql`
  fragment EventFields on Event {
    name
    startDate
    endDate
    location {
      label
      url
    }
    description {
      json
    }
    additionalDescription {
      json
    }
    imageCollection(limit: 10) {
      items {
        ...ImageFields
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;

export const SPECIAL_PROJECT_FRAGMENT = gql`
  fragment SpecialProjectFields on SpecialProject {
    name
    description {
      json
    }
    imageCollection(limit: 5) {
      items {
        ...ImageFields
      }
    }
    button {
      ...LinkFields
    }
  }
  ${IMAGE_FRAGMENT}
  ${LINK_FRAGMENT}
`;

export const COLLECTION_FRAGMENT = gql`
  fragment CollectionFields on Collection {
    name
    paintingsCollection(limit: 35) {
      items {
        ...PaintingFields
        imageCollection(limit: 1) {
          items {
            ...ImageFields
          }
        }
      }
    }
    paintingTile {
      ...PaintingFields
      imageCollection(limit: 1) {
        items {
          ...ImageFields
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${PAINTING_FRAGMENT}
`;

export const ABOUT_THE_AUTHOR_FRAGMENT = gql`
  fragment AboutTheAuthorFields on AboutTheAuthor {
    heading
    description {
      json
    }
    imageCollection {
      items {
        ...ImageFields
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
