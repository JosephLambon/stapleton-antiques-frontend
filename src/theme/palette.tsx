import { type ThemeOptions } from "@mui/material/styles";

export const palette : ThemeOptions["palette"] = {
    primary: {
        main: 'rgba(4, 17, 78, 1)'
    },
    secondary: {
        // main: 'rgb(251, 249, 249)'
        main: 'rgba(4, 17, 78, 1)'
    },
    text: {
        // primary: 'rgba(0, 0, 0, 0.87)',
        // secondary: 'rgba(0, 0, 0, 0.6)',
        // disabled: 'rgba(0, 0, 0, 0.38)'
        
        primary: 'rgba(251, 249, 249, 1)',
        secondary: 'rgba(251, 249, 249, 0.6)',
        disabled: 'rgb(251, 249, 249)'
    }
};
