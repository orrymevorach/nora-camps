import { gql } from '@apollo/client';

export const PAINTING_FRAGMENT = gql`
  fragment PaintingFields on Painting {
    name
    description {
      json
    }
    imageCollection(limit: 5) {
      items {
        url
        width
        height
        description
      }
    }
  }
`;
