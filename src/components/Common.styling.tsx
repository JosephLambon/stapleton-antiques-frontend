import { Box, type BoxProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavigationLink, type NavigationLinkProps } from "./Common";

export const AppBarButton = styled(NavigationLink)<NavigationLinkProps>(({theme}) => ({
    ...theme.typography.h6,
    textAlign: 'center'
}))

export const MainBackground = styled(Box)<BoxProps>(({theme}) => ({
    backgroundColor: theme.palette.secondary.main
}))