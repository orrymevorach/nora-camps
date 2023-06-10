import styles from "./painting-info-template.module.scss";
import PrimaryButton from "@/components/shared/primary-button";
import RichText from "@/components/shared/rich-text";
import { formatPrice, getVideoId } from "@/utils/string-utils";
import { useEffect, useRef, useState } from "react";
import EventDateRange from "../event-date-range/event-date-range";
import Eyebrow from "./eyebrow";
import Location from "./location";
import Details from "./details";
import ImageCarousel from "./image-carousel";
import clsx from "clsx";
import { PAGES } from "@/utils/contentful";

const { PAINTING_SPECIFIC_PAGE, SPECIAL_PROJECTS, ABOUT } = PAGES;

export default function PaintingInfoTemplate({
  imageCollection,
  collection = {},
  name,
  description,
  additionalDescription,
  price,
  details = [],
  startDate,
  endDate,
  location = null,
  page = "",
  button = { label: "", url: "" },
  imageOnRightSide = false,
  dimensions = "",
  status,
  videoUrl,
}) {
  const [showAdditionalDescription, setShowAdditionalDescription] =
    useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const additionalDescriptionRef = useRef();

  function handleClickReadMore() {
    setShowAdditionalDescription(!showAdditionalDescription);
    if (!showAdditionalDescription) {
      setTimeout(() => {
        additionalDescriptionRef.current.scrollIntoView();
      }, 200);
    }
  }

  const mapPageToButtonProps = {
    [PAINTING_SPECIFIC_PAGE]: {
      label: "Contact for purchase",
      href: {
        pathname: "/contact",
        query: {
          painting: name,
        },
      },
    },
    [SPECIAL_PROJECTS]: {
      label: button.label,
      href: { pathname: button.url },
    },
  };

  const buttonProps = mapPageToButtonProps[page];
  const isPainting = page === PAINTING_SPECIFIC_PAGE;
  const isSpecialProject = page === SPECIAL_PROJECTS;
  const isAboutPage = page === ABOUT;

  const showDetails = (details && details.length > 0) || dimensions;
  const showStatus = status && status !== "Available";

  useEffect(() => {
    const getVideoIdFromYoutubeUrl = () => {
      const id = getVideoId(videoUrl);
      setYoutubeVideoId(id);
    };
    if (videoUrl) {
      getVideoIdFromYoutubeUrl();
    }
  }, [videoUrl]);

  return (
    <div className={styles.paintingInfoTemplateContainer}>
      <div
        className={clsx(
          styles.mainContent,
          isSpecialProject || isAboutPage ? styles.centerVertically : "",
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
          {collection?.name && (
            <Eyebrow leftText="Collection" rightText={collection.name} />
          )}
          {startDate && <Eyebrow startDate={startDate} endDate={endDate} />}
          {name && <p className={styles.name}>{name}</p>}
          {showStatus && <p className={styles.status}>{status}</p>}
          {startDate && (
            <EventDateRange startDate={startDate} endDate={endDate} />
          )}
          {location && <Location location={location} />}
          {showDetails && <Details details={details} dimensions={dimensions} />}
          {price && (
            <p className={styles.price}>
              {formatPrice(price).replace(".00", "")}
            </p>
          )}
          {isPainting && (
            <PrimaryButton
              href={buttonProps.href}
              classNames={styles.contactButton}
              queryParams={buttonProps.queryParams}
            >
              {buttonProps.label}
            </PrimaryButton>
          )}

          {description && (
            <RichText
              json={description.json}
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
          {(additionalDescription || videoUrl) && (
            <button
              className={styles.readMoreButton}
              onClick={handleClickReadMore}
            >
              {!showAdditionalDescription ? "Read more" : "Read less"}
            </button>
          )}
        </div>
      </div>
      {additionalDescription && showAdditionalDescription && (
        <RichText
          json={additionalDescription.json}
          classNames={styles.additionalDetails}
          refs={additionalDescriptionRef}
        />
      )}
      {videoUrl && showAdditionalDescription && (
        <iframe
          className={clsx(
            !additionalDescription && styles.moreSpacing,
            styles.video
          )}
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        ></iframe>
      )}
    </div>
  );
}
