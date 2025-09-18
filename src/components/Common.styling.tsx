import { Box, type BoxProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavigationLink, type NavigationLinkProps } from "./Common";

export const AppBarButton = styled(NavigationLink)<NavigationLinkProps>(({theme}) => ({
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit' //temporary - needs to be made dynamic
}))

export const MainBackground = styled(Box)<BoxProps>(({theme}) => ({
    backgroundColor: theme.palette.secondary.main
}))