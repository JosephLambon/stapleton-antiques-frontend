import { styled } from '@mui/material/styles';
import Box, { type BoxProps } from '@mui/material/Box';
import { NavigationLink, type NavigationLinkProps } from '../Common/Common';

export const LogoMobile = styled(NavigationLink)<NavigationLinkProps>(() => ({
    gridArea: 'middle',
    color: 'inherit',
    textDecoration: 'none'
}))

export const NavDrawerIconWrapper = styled(Box)<BoxProps>(() => ({
    gridArea: 'right',
    marginRight: 0,
    marginLeft: 'auto'
}))

export const LogoComputer = styled(NavigationLink)<NavigationLinkProps>(() => ({
    gridArea: 'left',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
}))

export const NavigationItemWrapper = styled(Box)<BoxProps>(({theme}) => ({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'right',
    gridArea: 'right',
    "& .MuiButton-root": {
        color: theme.palette.primary.contrastText
    }
}));

