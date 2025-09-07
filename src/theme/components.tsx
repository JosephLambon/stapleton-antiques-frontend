import { type ThemeOptions } from "@mui/material/styles";
import BacasimeAntique from '../assets/Bacasime_Antique/BacasimeAntique-Regular.ttf';
import { palette } from './palette';

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
                textAlign: 'center'
            }),
            titleWrap: {
                padding: '10px 10px 10px'
            },
            title: {    
                fontSize: '1.5rem',
                fontWeight: 500,
                color: palette.text.primary
            },
            subtitle: {
                fontSize: '1rem',
                fontWeight: 500,
                color: palette.text.secondary
            }
        },
    }
};

