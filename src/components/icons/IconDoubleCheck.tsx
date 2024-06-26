import { SVGProps } from 'react';

export const IconDoubleCheck = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0}
        className="text-theme mr-1"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="none"
            d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"
        />
    </svg>
);
