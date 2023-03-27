import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Documentation for @contentful/rich-text-react-renderer: https://github.com/contentful/rich-text

const defaultConfig = {
  renderNode: {
    // Add space between paragraphs
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  },
};

export default function RichText({ json, config = defaultConfig }) {
  return documentToReactComponents(json, config);
}
