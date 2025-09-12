import { useRouteError } from "react-router-dom";
import { Typography } from "@mui/material";
import { CenteringWrapper } from './ErrorPage.styling';

function ErrorPage() {
    const error : any = useRouteError();
    console.error(error);
    
    return(
        <CenteringWrapper>
            <Typography variant="h2">Oops!</Typography>
            <Typography variant="subtitle1">
                Sorry, an unexpected error has occured.
            </Typography>
            <Typography variant="body1">
                <i>{error.statusText || error.message}</i>
            </Typography>
        </CenteringWrapper>
    );
}

export default ErrorPage;