import Image from 'next/image';
import styles from './painting-info-template.module.scss';
import PrimaryButton from '@/components/shared/primary-button';
import RichText from '@/components/shared/rich-text';
import { formatPrice } from '@/utils/string-utils';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { useRef, useState } from 'react';

export default function PaintingInfoTemplate({
  imageCollection,
  collection,
  name,
  description,
  additionalDescription,
  price,
  details = [],
}) {
  const [showAdditionalDescription, setShowAdditionalDescription] =
    useState(false);
  const additionalDescriptionRef = useRef();
  const { url, width, height, description: alt } = imageCollection.items[0];

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <span className={styles.richTextBold}>{text}</span>,
      [MARKS.ITALIC]: text => (
        <span className={styles.richTextItalic}>{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        console.log('children', children);
        return <p className={styles.richText}>{children}</p>;
      },
    },
  };

  function handleClickReadMore() {
    setShowAdditionalDescription(!showAdditionalDescription);
    if (!showAdditionalDescription) {
      setTimeout(() => {
        additionalDescriptionRef.current.scrollIntoView();
      }, 200);
    }
  }

  return (
    <div className={styles.paintingInfoTemplateContainer}>
      <div className={styles.mainContent}>
        <Image
          src={url}
          width={width}
          height={height}
          alt={alt}
          quality={100}
          className={styles.image}
        />
        <div className={styles.rightColumn}>
          {collection && (
            <div className={styles.collectionContainer}>
              <p className={styles.collection}>Collection</p>
              <p className={styles.collectionName}>{collection}</p>
            </div>
          )}
          {name && <p className={styles.name}>{name}</p>}
          {details && details.length && (
            <div className={styles.detailsContainer}>
              {details.map((detail, index) => {
                const isLastDetail = details.length === index + 1;
                if (isLastDetail)
                  return (
                    <p className={styles.detail} key={detail}>
                      {detail}
                    </p>
                  );
                return (
                  <p className={styles.detail} key={detail}>
                    {detail},
                  </p>
                );
              })}
            </div>
          )}
          {price && (
            <p className={styles.price}>
              {formatPrice(price).replace('.00', '')}
            </p>
          )}
          <PrimaryButton href="#" classNames={styles.contactButton}>
            Contact for purchase
          </PrimaryButton>
          {description && (
            <RichText json={description.json} config={richTextConfig} />
          )}
          {additionalDescription && (
            <button
              className={styles.readMoreButton}
              onClick={handleClickReadMore}
            >
              {!showAdditionalDescription ? 'Read more' : 'Read less'}
            </button>
          )}
        </div>
      </div>
      {additionalDescription && showAdditionalDescription && (
        <div
          className={styles.additionalDetails}
          ref={additionalDescriptionRef}
        >
          <RichText json={additionalDescription.json} config={richTextConfig} />
        </div>
      )}
    </div>
  );
}
