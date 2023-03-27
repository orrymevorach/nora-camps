import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql`
  fragment ImageFields on Asset {
    url
    width
    height
    description
  }
`;

//  Exlusively for the painting in a gallery or collection, the limit is set to 1 to simplify the query
// For the Painting Display Page, the limit will have to be higher to render more images in the carousel
export const PAINTING_FRAGMENT = gql`
  fragment PaintingFields on Painting {
    name
    price
    description {
      json
    }
    imageCollection(limit: 1) {
      items {
        ...ImageFields
      }
    }
    __typename
  }
  ${IMAGE_FRAGMENT}
`;
