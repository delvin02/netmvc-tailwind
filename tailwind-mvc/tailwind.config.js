module.exports = {
    purge: {
        enabled: true,
        content: [
            './Pages/**/*.cshtml',
            './Views/**/*.cshtml'
        ]
    },
    darkMode: false, 
    theme: {
        extend: {},
        fontFamily: {
            header: ['Noto Sans'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}