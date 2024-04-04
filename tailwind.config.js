/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'csk-50': '#EEF1F7',
                'csk-100': '#DCE3EF',
                'csk-200': '#B9C6DF',
                'csk-300': '#96AACF',
                'csk-400': '#738EBF',
                'csk-500': '#1B263B',
                'csk-600': '#405B8C',
                'csk-700': '#304469',
                'csk-800': '#202D46',
                'csk-900': '#101723',
                'csk-950': '#080B11',
                'csk-900-opacity': '#101723',
            },
            fontFamily: {
                bebasNeue: ['Bebas Neue', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            },
        },
        gridTemplateColumns: {
            'auto-fill-100': 'repeat(auto-fill, minmax(350px, 1fr))',
            'auto-fit-100': 'repeat(auto-fit, minmax(350px, 1fr))',
        },
    },
    plugins: [],
}
