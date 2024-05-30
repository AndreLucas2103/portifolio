import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                color1: '#212223',
                color2: '#00BC91',
                color3: '#2D2E2F',
                color4: '#18191A',
                color5: '#333333',
                color6: '#999999',
                color7: '#BEBEBE',
            },
            spacing: {
                '10px': '10px',
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '50px': '50px',
                '60px': '60px',
            },
        },
    },
    plugins: [],
};
export default config;
