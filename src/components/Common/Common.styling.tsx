import { Box, type BoxProps } from "@mui/material";
import { Container, type ContainerProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavigationLink, type NavigationLinkProps } from "./Common";

export const AppBarButton = styled(NavigationLink)<NavigationLinkProps>(({}) => ({
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit'
}))

export const MainBackground = styled(Box)<BoxProps>(({theme}) => ({
    minHeight: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main
}))

interface OutletContainerProps extends ContainerProps {
    addpadding?: boolean
}

export const OutletContainer = styled(Container)<OutletContainerProps>(({addpadding, theme}) => ({
    flex: '1 0 auto',
    paddingLeft: addpadding ? 'auto' : theme.spacing(0.5),
    paddingRight: addpadding ? 'auto' : theme.spacing(0.5),
    paddingTop: addpadding ? 'auto' : 0,
}))