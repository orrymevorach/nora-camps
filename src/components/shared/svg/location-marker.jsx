export default function LocationMarker({ classNames = "" }) {
  return (
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        d="M9 0C4.02946 0 0 4.07961 0 9.11202C0 15.2303 9 23 9 23C9 23 18 15.9618 18 9.11202C18 4.07961 13.9705 0 9 0ZM9 12.7568C7.08033 12.7568 5.52414 11.1813 5.52414 9.23771C5.52414 7.29414 7.08033 5.71858 9 5.71858C10.9197 5.71858 12.4759 7.29414 12.4759 9.23771C12.4759 11.1813 10.9197 12.7568 9 12.7568Z"
        fill="#231F20"
      />
    </svg>
  );
}
