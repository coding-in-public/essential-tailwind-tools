import { twMerge } from "tailwind-merge";

export default function Link({ href, className, children, pending }) {
  return (
    <a
      href={href}
      className={twMerge(
        `rounded-md px-3.5 py-2.5 text-sm font-semibold`,
        `bg-${pending ? "gray" : "blue"}-600`,
        className,
      )}
    >
      {children}
    </a>
  );
}
