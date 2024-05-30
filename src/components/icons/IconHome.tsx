import { SVGProps } from 'react';

export const IconHome = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0}
        className="text-theme"
        viewBox="0 0 512 512"
        {...props}
    >
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
        />
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
        />
    </svg>
);
