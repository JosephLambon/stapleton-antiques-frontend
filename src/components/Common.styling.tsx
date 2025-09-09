import { Button, type ButtonProps } from "@mui/material";
import { Box, type BoxProps } from "@mui/material";
import { styled } from '@mui/material/styles';

export const AppBarButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.primary.contrastText,
    textAlign: 'center'
}))

export const MainBackground = styled(Box)<BoxProps>(({theme}) => ({
    backgroundColor: theme.palette.secondary.main
}))