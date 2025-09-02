import { type ThemeOptions } from "@mui/material/styles";
import BacasimeAntique from '../assets/Bacasime_Antique/BacasimeAntique-Regular.ttf';

export const components = {
    MuiCssBaseline: {
        styleOverrides:{
            '@font-face': {
            fontFamily: 'BacasimeAntique',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 400,
            src: `
                local('BacasimeAntique-Regular'),
                local('BacasimeAntique-Regular'),
                url(${BacasimeAntique}) format('truetype')
            `,
            },
        },
    },
    // When the parent ImageListItem is hovered, display title
    MuiImageListItemBar: {
        styleOverrides: {
            root: {
                height: '100%',
                width: '100%',
                p:5,
                textAlign: 'center',
                backgroundColor: 'rgba(0, 17, 94, 0.25)',
                display: 'none',
                '.MuiImageListItem-root:hover &': {
                    display: 'flex'
                },
            },
            title: {
                fontSize: '2em',
                fontWeight: 500,
            },
        },
    }
} as ThemeOptions["components"];

