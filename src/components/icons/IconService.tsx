import { SVGProps } from 'react';

export const IconService = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        {...props}
    >
        <rect
            width={448}
            height={320}
            x={32}
            y={128}
            fill="none"
            strokeLinejoin="round"
            strokeWidth={32}
            rx={48}
            ry={48}
        />
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m112 112H32m288 0v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24"
        />
    </svg>
);
