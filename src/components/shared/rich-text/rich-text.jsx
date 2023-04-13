import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { sharedRichTextConfig } from './rich-text-config';

// Documentation for @contentful/rich-text-react-renderer:
// https://www.contentful.com/blog/rich-text-field-tips-and-tricks/
// https://github.com/contentful/rich-text/tree/8b31b855f758fd8f26a041270903eadd6ebe337f/packages/rich-text-react-renderer
// https://www.npmjs.com/package/@contentful/rich-text-react-renderer/v/14.1.2

export default function RichText({ json, config = null, classNames, refs }) {
  const configuration = config || sharedRichTextConfig;
  return (
    <div className={classNames} ref={refs}>
      {documentToReactComponents(json, configuration)}
    </div>
  );
}
