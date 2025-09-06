import { type ThemeOptions } from "@mui/material/styles";
import BacasimeAntique from '../assets/Bacasime_Antique/BacasimeAntique-Regular.ttf';

export const components : ThemeOptions["components"] = {
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
            }
        }
    },
    // When the parent ImageListItem is hovered, display title
    MuiImageListItemBar: {
        styleOverrides: {
            root: ({ theme }) => ({
                [theme.breakpoints.up('sm')]: {
                    backgroundColor: 'rgba(0, 17, 94, 0.25)',
                    p:5,
                    '.MuiImageListItem-root:hover &': {
                        visibility: 'visible'
                    },
                    visibility: 'hidden',
                },
                height: '100%',
                width: '100%',
                textAlign: 'center',
            }),
            title: {
                fontSize: '2em',
                fontWeight: 500,
            },
            subtitle: {
                fontSize: '1em',
                fontWeight: 500,
            }
        },
    }
};

