export default function Link({ href, className, children }) {
  return (
    <a
      href={href}
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold ${className}`}
    >
      {children}
    </a>
  );
}
