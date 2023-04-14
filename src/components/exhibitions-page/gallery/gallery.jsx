import styles from './gallery.module.scss';
import EventsList from './events-list';

export default function Gallery({ items: events }) {
  const today = new Date().toISOString();
  const currentEvents = events.filter(({ startDate, endDate }) => {
    const dateToCompare = endDate || startDate;
    return dateToCompare >= today;
  });
  const pastEvents = events.filter(({ startDate, endDate }) => {
    const dateToCompare = endDate || startDate;
    return dateToCompare < today;
  });
  const hasCurrentEvents = currentEvents.length > 0;
  return (
    <div className={styles.galleryContainer}>
      {hasCurrentEvents && (
        <EventsList heading="Current" events={currentEvents} />
      )}
      <EventsList heading="Past" events={pastEvents} />
    </div>
  );
}
