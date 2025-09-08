import { responsiveFontSizes, createTheme, type Theme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { components } from './components';
 
let theme : Theme = createTheme({
    cssVariables: true,
    typography,
    components,
    palette
});

theme = responsiveFontSizes(theme);

export default theme;