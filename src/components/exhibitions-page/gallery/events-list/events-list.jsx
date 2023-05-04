import EventTile from "@/components/exhibitions-page/event-tile";
import styles from "./events-list.module.scss";

export default function EventsList({ heading, events }) {
  return (
    <>
      <p className={styles.heading}>{heading}</p>
      <ul>
        {events.map((event, index) => {
          return (
            <li key={event.name}>
              <EventTile {...event} heading={heading} index={index} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
