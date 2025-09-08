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
            root: {
                textAlign: 'center'
            },
            titleWrap: {
                padding: '10px 10px 10px'
            },
            title: ({ theme }) => ({
                [theme.breakpoints.down('sm')]: {    
                    color: theme.palette.text.primary
                },
                fontSize: '1.5rem'
            }),
            subtitle: ({ theme }) => ({
                [theme.breakpoints.down('sm')]: {    
                    color: theme.palette.text.secondary
                },
                fontSize: '1rem'
            }),
        },
    }
};

