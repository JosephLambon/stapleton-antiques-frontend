import { styled } from '@mui/material/styles';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import Box, { type BoxProps } from '@mui/material/Box';

export const LogoMobile = styled(Typography)<TypographyProps>(({theme}) => ({
    gridArea: 'middle',
    color: 'inherit'
}))

export const IconButtonBoxMobile = styled(Box)<BoxProps>(({theme}) => ({
    gridArea: 'right',
    marginRight: 0,
    marginLeft: 'auto'
}))

export const LogoComputer = styled(Typography)<TypographyProps>(({theme}) => ({
    gridArea: 'left',
    color: 'inherit',
    cursor: 'pointer'
}))

export const PageLinksComputer = styled(Box)<BoxProps>(({theme}) => ({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'right',
    gridArea: 'right',
    "& .MuiButton-root": {
        color: theme.palette.primary.contrastText
    }
}));

