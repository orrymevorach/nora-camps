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
  return (
    <div className={styles.galleryContainer}>
      <EventsList heading="Current" events={currentEvents} />
      <EventsList heading="Past" events={pastEvents} />
    </div>
  );
}
