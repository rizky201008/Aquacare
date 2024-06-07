import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import { Flowbite } from 'flowbite-react';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/lib/esm/**/*.js'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, Flowbite, daisyui, function ({ addUtilities }) {
        const newUtilities = {
            '.truncate-lines': {
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': '3', /* Adjust the number of lines */
                overflow: 'hidden',
                'text-overflow': 'ellipsis',
                'max-height': '4.5em', /* Adjust based on the number of lines and line-height */
                'line-height': '1.5em', /* Adjust the line-height to match the font size and design */
            },
        };

        addUtilities(newUtilities, ['responsive', 'hover']);
    },],
    darkMode: 'false',
    daisyui: {
        themes: ["light"],
    },
};
