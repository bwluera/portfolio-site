const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './public/*.html',
        './app/helpers/**/*.rb',
        './app/javascript/**/*.js',
        './app/views/**/*.{erb,haml,html,slim}',
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        colors: {
            "wgu-blue": "#003057",
            "wgu-blue-dark": "#002a4b",
            "wgu-blue-alt": "#4986AD",
            "wgu-white": "#D9D9D6",
            "wgu-white-alt": "#97999B",
            "tamu-maroon": "#500000",
            "tamu-maroon-dark": "#3C0000",
            "tamu-accent": "#732F2F",
            "tamu-white": "#FFFFFF",
        },
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
                mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/container-queries'),
        require("daisyui")
    ],
    darkMode: 'class',
    daisyui: {
        themes: ["fantasy", "black", "dracula"],
        prefix: "dui-"
    },
}
