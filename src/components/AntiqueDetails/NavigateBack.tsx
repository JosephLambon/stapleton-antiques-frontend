import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { NavigateBackWrapper, PaddedArrowBackIcon } from "./NavigateBack.styling";

function NavigateBack({label} : {label: string}) {
    const theme = useTheme();
    const navigate = useNavigate();
    const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <NavigateBackWrapper
        onMobile={onMobile}
        variant='body1'
        onClick={() => 
            navigate(-1)
        }
        >
            <PaddedArrowBackIcon />
            {label}
        </NavigateBackWrapper>
    )
}

export default NavigateBack;