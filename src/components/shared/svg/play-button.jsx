export default function PlayButton({ classNames = "" }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <circle cx="24" cy="24" r="24" fill="rgba(0, 0, 0, 0.6)" />
      <path
        d="M19 15.5L33 24L19 32.5V15.5Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
