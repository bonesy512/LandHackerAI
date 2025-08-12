import type { SVGProps } from "react";

export function AppStoreBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="160" height="53.3" viewBox="0 0 120 40" fill="none" {...props} data-ai-hint="app store">
      <rect width="120" height="40" rx="5" fill="black" />
      <path
        d="M24.6 22.3c0 .8.2 1.5.7 2.1.5.6 1.1 1 1.9 1.1s1.6-.2 2.3-.6l.3-.2c.2-.2.4-.4.4-.7 0-.3-.1-.5-.4-.6-.2-.1-.5-.1-.7 0l-.3.2c-.4.3-.9.5-1.3.4s-.8-.4-1-.8c-.3-.4-.4-.9-.4-1.3v-7.8h4.6v1.9H28v1.3h3.2v1.9H28v2.7zM34.3 22.3c0 .8.2 1.5.7 2.1.5.6 1.1 1 1.9 1.1s1.6-.2 2.3-.6l.3-.2c.2-.2.4-.4.4-.7 0-.3-.1-.5-.4-.6-.2-.1-.5-.1-.7 0l-.3.2c-.4.3-.9.5-1.3.4s-.8-.4-1-.8c-.3-.4-.4-.9-.4-1.3v-7.8h4.6v1.9h-3.2v1.3h3.2v1.9h-3.2v2.7z"
        fill="white"
      />
      <path
        d="M17.6 13c.8-1 2-1.6 3.3-1.6.3 0 .6 0 .9.1.5.1 1 .3 1.5.6.4.2.8.5 1.1.8.8.8 1.2 1.8 1.2 2.9 0 .6-.1 1.2-.4 1.7-.3.5-.7 1-1.1 1.3-.5.4-1 .7-1.5.9-.5.2-1.1.3-1.6.3-1.3 0-2.4-.6-3.2-1.6-.4-.5-.6-1-.6-1.6.1-.6.3-1.1.6-1.5zM15 13.7c-1.8 1.1-2.9 3-3.2 5.1.4 0 .8 0 1.2.1-1.1 3-2.9 5.3-5.2 6.5 1.4.9 3 1.4 4.6 1.4 1.5 0 2.9-.4 4.2-1.2 1.3-.8 2.3-1.9 2.9-3.2.7-1.3 1-2.8.9-4.2-.1-2-1-3.8-2.3-5.3-1-.9-2.2-1.6-3.4-2.1z"
        fill="white"
      />
      <text
        x="60"
        y="15"
        textAnchor="middle"
        fontSize="8"
        fontFamily="Arial, sans-serif"
        fill="white"
      >
        Download on the
      </text>
      <text
        x="60"
        y="30"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="white"
      >
        App Store
      </text>
    </svg>
  );
}
