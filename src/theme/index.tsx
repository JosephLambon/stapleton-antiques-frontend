import { createTheme, type Theme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";

export const theme = createTheme({
    typography,
    palette
}) as Theme;