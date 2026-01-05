import { Typography, type TypographyProps } from "@mui/material"
import {styled} from "@mui/material/styles";

export const Address = styled(Typography)<TypographyProps>(({theme}) => ({
    lineHeight: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up('sm')]: {
        marginBottom: 0
    }
}))