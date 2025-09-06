import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { components } from './components';
 
export const theme : ThemeOptions = createTheme({
    cssVariables: true,
    typography,
    components,
    palette
});