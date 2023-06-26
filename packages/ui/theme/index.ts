import { Shadows, createTheme } from '@mui/material/styles'


// Public folder from web app. Read more: https://turbo.build/pack/docs/features/static-assets
const fontFace = `
@font-face {
    font-family: 'Be Vietnam Pro Thin';
    src: url('./fonts/be-vietnam/BeVietnamPro-Thin.ttf') format('truetype');
}
`
const theme = createTheme({
    palette: {
        action: {
            disabled: 'rgba(233, 233, 240, 1)',
        },
        primary: {
            main: 'rgba(0, 0, 0, 1)',
        },
        secondary: {
            main: '#28245E',
            light: 'rgba(190, 193, 252, 1)',
        },
        common: {
            black: '#262626',
        },
        text: {
            primary: '#232233',
            secondary: '#515167',
            disabled: 'rgba(175, 174, 184, 1)',
        },
        success: {
            main: 'rgba(1, 165, 165, 1)',
        },
        error: {
            main: '#ED3F54',
        },
        grey: {
            200: '#C9CCD8',
            300: '#A8ABB6',
            400: '#999999',
            500: '#F5F4F9',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Clash Display Bold',
            fontSize: 64,
            letterSpacing: 'normal',
        },
        h2: {
            fontFamily: 'Linik Sans',
            fontSize: 40,
            letterSpacing: 'normal',
        },
        h4: {
            fontFamily: 'Linik Sans',
            fontSize: 28,
            letterSpacing: 'normal',
        },
        subtitle1: {
            fontSize: 20,
            letterSpacing: 'normal',
        },
        subtitle2: {
            fontSize: 24,
            letterSpacing: 'normal',
        },
        h5: {
            fontFamily: 'Linik Sans',
            fontSize: 18,
            letterSpacing: 'normal',
        },
        h6: {
            fontFamily: 'Linik Sans',
            fontSize: 12,
            letterSpacing: 'normal',
        },
        body1: {
            fontFamily: 'Linik Sans',
            fontSize: 16,
            letterSpacing: 'normal',
        },
        button: {
            fontFamily: 'Be Vietnam Pro Thin',
            fontSize: 16,
            letterSpacing: 'normal',
        },
    },
    shape: {
        borderRadius: 8,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            ${fontFace}
            `,
        },
    },
    shadows: Array(25).fill('none') as Shadows,
})

export default theme
