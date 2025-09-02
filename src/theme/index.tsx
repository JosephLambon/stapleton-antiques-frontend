import { createTheme, type Theme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { components } from './components';
 
export const theme = createTheme({
    cssVariables: true,
    typography,
    components,
    palette
}) as Theme;