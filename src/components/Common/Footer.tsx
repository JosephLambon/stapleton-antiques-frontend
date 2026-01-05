import { Box, Typography, useTheme } from "@mui/material";
import { Address } from "./Footer.styling";
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            textAlign: { xs: 'center', sm: 'left'},
            px: { xs: theme.spacing(10), sm: null},
            paddingTop: theme.spacing(8),
            minHeight: '50vh',
            display:'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                maxWidth: {xs: '80vw', lg: '60vw'},
                width: '100%',
                margin: '0 auto',
            }}>
                <Box sx={{
                    textAlign:'center'
                }}>
                    <Typography variant="h4" sx={{marginBottom: theme.spacing(5)}}>Contact</Typography>
                </Box>
                <Box
                sx={{
                    display: { xs: 'flex', sm: 'grid'},
                    flexDirection: { xs: 'column', sm: 'row'},
                    gridTemplateColumns: { xs: null, sm: '1fr 1fr 1fr 1fr'},
                    justifyContent: { xs: 'end', sm: null },
                    alignItems: 'center'
                }}  
                >
                    <Box></Box>
                    <Box sx={{textAlign: { xs: 'center', sm: 'left'}}}>
                        <Address>
                            Station Mill <br />
                            Station Road <br />
                            Chipping Norton <br />
                            Oxfordshire <br />
                            OX7 5HX <br />
                        </Address>
                    </Box>

                    <Box>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'right'}}}>
                            <Typography fontSize={'large'} >
                                +44 7791 970596 <br />
                            </Typography>
                            <Typography sx={{color:theme.palette.text.secondary, cursor: 'pointer', textDecoration: 'underline', }}  onClick={() => window.location.href = `mailto:beaky@stapletonantiques.com`}>
                                beaky@stapletonantiques.com
                            </Typography>
                            <InstagramIcon
                            fontSize="large"
                            onClick={() => window.open("https://www.instagram.com/stapletonantiques/")} 
                            sx={{ marginTop: { xs: theme.spacing(5), sm: theme.spacing(3)}, marginBottom: { xs: theme.spacing(5), sm: 0}, cursor: 'pointer'}}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box></Box>
            </Box>
            <Box sx={{textAlign:'center', marginBottom:theme.spacing(3), marginTop: 'auto'}}>
                <Typography color="textSecondary" >
                    © 2026 Stapleton Antiques
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;