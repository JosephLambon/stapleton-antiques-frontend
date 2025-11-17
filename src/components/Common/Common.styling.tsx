import { Box, type BoxProps } from "@mui/material";
import { Container, type ContainerProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavigationLink, type NavigationLinkProps } from "./Common";

export const AppBarButton = styled(NavigationLink)<NavigationLinkProps>(({}) => ({
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit' //temporary - needs to be made dynamic
}))

export const MainBackground = styled(Box)<BoxProps>(({theme}) => ({
    minHeight: '180dvh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main
}))

export const OutletContainer = styled(Container)<ContainerProps>(() => ({
    flex: '1 0 auto'
}))