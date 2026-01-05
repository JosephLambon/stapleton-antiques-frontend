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
    addpadding?: string
}

export const OutletContainer = styled(Container)<OutletContainerProps>(({addpadding, theme}) => ({
    flex: '1 0 auto',
    paddingLeft: addpadding ? 'auto' : theme.spacing(0.5),
    paddingRight: addpadding ? 'auto' : theme.spacing(0.5),
    paddingTop: addpadding ? 'auto' : 0
}))

export const LandingPage = styled(Box)<BoxProps>(({theme}) => ({
    width: '100%',
    height: '78vh',
    marginTop: '-2vh',
    backgroundImage: 'url(https://sastapletonantiques.blob.core.windows.net/antique-image-container/background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'end',
    xs: {
        paddingBottom: theme.spacing(14)
    },
    paddingBottom: theme.spacing(10)
}))

export const Spacer = styled(Box)<BoxProps>(({theme}) => ({
    height: '5vh',
    backgroundColor: theme.palette.primary.main
}))