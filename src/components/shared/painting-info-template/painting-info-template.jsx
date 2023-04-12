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
import clsx from 'clsx';

export const THEMES = {
  PAINTING: 'PAINTING',
  EVENT: 'EVENT',
  SPECIAL_PROJECT: 'SPECIAL_PROJECT',
};
const { PAINTING, EVENT, SPECIAL_PROJECT } = THEMES;

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
  theme = '',
  button = { label: '', url: '' },
  imageOnRightSide = false,
}) {
  const [showAdditionalDescription, setShowAdditionalDescription] =
    useState(false);
  const additionalDescriptionRef = useRef();

  function handleClickReadMore() {
    setShowAdditionalDescription(!showAdditionalDescription);
    if (!showAdditionalDescription) {
      setTimeout(() => {
        additionalDescriptionRef.current.scrollIntoView();
      }, 200);
    }
  }

  const mapThemeToButtonProps = {
    [PAINTING]: {
      label: 'Contact for purchase',
      href: '/contact',
    },
    [SPECIAL_PROJECT]: {
      label: button.label,
      href: button.url,
    },
  };

  const buttonProps = mapThemeToButtonProps[theme];
  const isPainting = theme === PAINTING;
  const isSpecialProject = theme === SPECIAL_PROJECT;

  return (
    <div className={styles.paintingInfoTemplateContainer}>
      <div
        className={clsx(
          styles.mainContent,
          isSpecialProject && styles.centerVertically,
          imageOnRightSide && styles.imageOnRightSide
        )}
      >
        {imageCollection?.items && (
          <ImageCarousel
            images={imageCollection.items}
            hasBackground={isSpecialProject ? false : true}
            classNames={styles.imageCarousel}
          />
        )}
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
          {isPainting && (
            <PrimaryButton
              href={buttonProps.href}
              classNames={styles.contactButton}
            >
              {buttonProps.label}
            </PrimaryButton>
          )}

          {description && (
            <RichText
              json={description.json}
              config={richTextConfig}
              classNames={styles.richTextContainer}
            />
          )}
          {isSpecialProject && (
            <PrimaryButton
              href={buttonProps.href}
              classNames={styles.contactButton}
            >
              {buttonProps.label}
            </PrimaryButton>
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
        <RichText
          json={additionalDescription.json}
          config={richTextConfig}
          classNames={styles.additionalDetails}
          refs={additionalDescriptionRef}
        />
      )}
    </div>
  );
}
