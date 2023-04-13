import styles from './painting-info-template.module.scss';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const richTextConfig = {
  renderMark: {
    [MARKS.BOLD]: text => <span className={styles.richTextBold}>{text}</span>,
    [MARKS.ITALIC]: text => (
      <span className={styles.richTextItalic}>{text}</span>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={styles.richText}>{children}</p>;
    },
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};
