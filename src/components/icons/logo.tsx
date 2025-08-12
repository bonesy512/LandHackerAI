import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2 L2 2 L2 12 L7 12 L7 7 L12 7 Z" fill="hsl(var(--primary))" />
      <path d="M12 22 L22 22 L22 12 L17 12 L17 17 L12 17 Z" fill="hsl(var(--primary))" />
      <path d="M2 12 L2 22" />
      <path d="M7 12 L7 17" />
      <path d="M12 2 L12 7" />
      <path d="M17 12 L17 7" />
      <path d="M22 12 L22 2" />
      <path d="M12 17 L12 22" />
    </svg>
  );
}
