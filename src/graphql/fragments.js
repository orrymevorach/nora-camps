export const PAINTING_FRAGMENT = `
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
