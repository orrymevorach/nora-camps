import styles from './events-list.module.scss';

export default function EventsList({ heading, events }) {
  return (
    <>
      <p className={styles.heading}>{heading}</p>
      <ul>
        {events.map(event => {
          return <li key={event.name}>Event</li>;
        })}
      </ul>
    </>
  );
}
