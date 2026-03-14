export function TistoryIcon({ className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      {...props}
    >
      <circle cx="32" cy="32" r="32" fill="#000000" />
      <circle cx="22" cy="22" r="5" fill="#FFFFFF" />
      <circle cx="32" cy="22" r="5" fill="#FFFFFF" />
      <circle cx="42" cy="22" r="5" fill="#FFFFFF" />
      <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
      <circle cx="32" cy="42" r="5" fill="#FFFFFF" />
    </svg>
  );
}
