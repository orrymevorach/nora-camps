import styles from './painting-info-template.module.scss';
import PrimaryButton from '@/components/shared/primary-button';
import RichText from '@/components/shared/rich-text';
import { formatPrice } from '@/utils/string-utils';
import { useRef, useState } from 'react';
import EventDateRange from '../event-date-range/event-date-range';
import Eyebrow from './eyebrow';
import { richTextConfig } from './rich-text-config';
import Location from './location';
import Details from './details';
import ImageCarousel from './image-carousel';

export default function PaintingInfoTemplate({
  imageCollection,
  collection,
  name,
  description,
  additionalDescription,
  price,
  details = [],
  startDate,
  endDate,
  location,
}) {
  const [showAdditionalDescription, setShowAdditionalDescription] =
    useState(false);
  const additionalDescriptionRef = useRef();
  const { url, width, height, description: alt } = imageCollection.items[0];

  function handleClickReadMore() {
    setShowAdditionalDescription(!showAdditionalDescription);
    if (!showAdditionalDescription) {
      setTimeout(() => {
        additionalDescriptionRef.current.scrollIntoView();
      }, 200);
    }
  }

  const isEvent = !!startDate;

  return (
    <div className={styles.paintingInfoTemplateContainer}>
      <div className={styles.mainContent}>
        <ImageCarousel images={imageCollection.items} />
        <div className={styles.rightColumn}>
          {collection && (
            <Eyebrow leftText="Collection" rightText={collection} />
          )}
          {startDate && <Eyebrow startDate={startDate} endDate={endDate} />}
          {name && <p className={styles.name}>{name}</p>}
          {startDate && (
            <EventDateRange startDate={startDate} endDate={endDate} />
          )}
          {location && <Location location={location} />}
          {details && !!details.length && <Details details={details} />}
          {price && (
            <p className={styles.price}>
              {formatPrice(price).replace('.00', '')}
            </p>
          )}
          {!isEvent && (
            <PrimaryButton href="#" classNames={styles.contactButton}>
              Contact for purchase
            </PrimaryButton>
          )}

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
