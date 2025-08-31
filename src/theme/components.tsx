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
    }
} as ThemeOptions["components"];

