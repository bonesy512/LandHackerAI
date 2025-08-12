import type { SVGProps } from "react";

export function GooglePlayBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="160" height="53.3" viewBox="0 0 120 40" fill="none" {...props} data-ai-hint="google play">
      <rect width="120" height="40" rx="5" fill="black" />
      <path d="M15.5 10.9l8.2 4.7-8.2 4.8V10.9z" fill="#00FFC2" />
      <path d="M14.5 9.9c-.3.2-.5.4-.5.8v18.7c0 .4.2.7.5.8l13.5-7.8-13.5-12.5z" fill="#00A0FF" />
      <path d="M36.1 17.5l-8.1-8.1-13.5 12.5 5.3 5.3 16.3-9.7z" fill="#FFC900" />
      <path d="M36.1 22.5l-16.3 9.7c.4.1.8.1 1.2-.1l15.1-8.7-.1-.9z" fill="#FF3A44" />
      <text
        x="75"
        y="15"
        textAnchor="middle"
        fontSize="8"
        fontFamily="Arial, sans-serif"
        fill="white"
      >
        GET IT ON
      </text>
      <text
        x="75"
        y="30"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="white"
      >
        Google Play
      </text>
    </svg>
  );
}
